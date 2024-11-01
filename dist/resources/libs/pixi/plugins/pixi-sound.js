!function(t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Sound=t()}((function(){return function t(e,n,o){function i(s,u){if(!n[s]){if(!e[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(r)return r(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[s]={exports:{}};e[s][0].call(l.exports,(function(t){return i(e[s][1][t]||t)}),l,l.exports,t,e,n,o)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({1:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function t(t,e){this._output=e,this._input=t}return Object.defineProperty(t.prototype,"destination",{get:function(){return this._input},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"filters",{get:function(){return this._filters},set:function(t){var e=this;if(this._filters&&(this._filters.forEach((function(t){t&&t.disconnect()})),this._filters=null,this._input.connect(this._output)),t&&t.length){this._filters=t.slice(0),this._input.disconnect();var n=null;t.forEach((function(t){null===n?e._input.connect(t.destination):n.connect(t.destination),n=t})),n.connect(this._output)}},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){this.filters=null,this._input=null,this._output=null},t}();n.default=o},{}],2:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("./index"),i=["wav","mp3","ogg","oga","m4a"];function r(t,e){t.data&&i.indexOf(t._getExtension())>-1?t.sound=o.default.add(t.name,{loaded:e,preload:!0,srcBuffer:t.data}):e()}function s(){return r}n.install=function(){var t=PIXI.loaders.Resource;i.forEach((function(e){t.setExtensionXhrType(e,t.XHR_RESPONSE_TYPE.BUFFER),t.setExtensionLoadType(e,t.LOAD_TYPE.XHR)})),PIXI.loaders.Loader.addPixiMiddleware(s),PIXI.loader.use(r)}},{"./index":17}],3:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("./index"),i=t("./SoundInstance"),r=t("./SoundNodes"),s=t("./SoundSprite"),u=function(){function e(t,e){var n={};"string"==typeof e?n.src=e:e instanceof ArrayBuffer?n.srcBuffer=e:n=e,n=Object.assign({autoPlay:!1,singleInstance:!1,src:null,srcBuffer:null,preload:!1,volume:1,speed:1,complete:null,loaded:null,loop:!1,useXHR:!0},n),this._context=t,this._nodes=new r.default(this._context),this._source=this._nodes.bufferSource,this._instances=[],this._sprites={};var o=n.complete;this._autoPlayOptions=o?{complete:o}:null,this.isLoaded=!1,this.isPlaying=!1,this.autoPlay=n.autoPlay,this.singleInstance=n.singleInstance,this.preload=n.preload||this.autoPlay,this.src=n.src,this.srcBuffer=n.srcBuffer,this.useXHR=n.useXHR,this.volume=n.volume,this.loop=n.loop,this.speed=n.speed,n.sprites&&this.addSprites(n.sprites),this.preload&&this._beginPreload(n.loaded)}return e.from=function(t){return new e(o.default.context,t)},e.prototype.destroy=function(){this._nodes.destroy(),this._nodes=null,this._context=null,this._source=null,this.removeSprites(),this._sprites=null,this.srcBuffer=null,this._removeInstances(),this._instances=null},Object.defineProperty(e.prototype,"isPlayable",{get:function(){return this.isLoaded&&!!this._source&&!!this._source.buffer},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"context",{get:function(){return this._context},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"volume",{get:function(){return this._volume},set:function(t){this._volume=this._nodes.gain.gain.value=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"loop",{get:function(){return this._source.loop},set:function(t){this._source.loop=!!t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"buffer",{get:function(){return this._source.buffer},set:function(t){this._source.buffer=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"duration",{get:function(){return console.assert(this.isPlayable,"Sound not yet playable, no duration"),this._source.buffer.duration},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"nodes",{get:function(){return this._nodes},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"filters",{get:function(){return this._nodes.filters},set:function(t){this._nodes.filters=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"speed",{get:function(){return this._source.playbackRate.value},set:function(t){this._source.playbackRate.value=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"instances",{get:function(){return this._instances},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sprites",{get:function(){return this._sprites},enumerable:!0,configurable:!0}),e.prototype.addSprites=function(t,e){if("object"==typeof t){var n={};for(var o in t)n[o]=this.addSprites(o,t[o]);return n}if("string"==typeof t){console.assert(!this._sprites[t],"Alias "+t+" is already taken");var i=new s.default(this,e);return this._sprites[t]=i,i}},e.prototype.removeSprites=function(t){if(t){var e=this._sprites[t];void 0!==e&&(e.destroy(),delete this._sprites[t])}else for(var n in this._sprites)this.removeSprites(n);return this},e.prototype.play=function(t,e){var n,o=this;if("string"==typeof t?n={sprite:s=t,complete:e}:"function"==typeof t?(n={}).complete=t:n=t,(n=Object.assign({complete:null,loaded:null,sprite:null,start:0,fadeIn:0,fadeOut:0},n||{})).sprite){var r=n.sprite;console.assert(!!this._sprites[r],"Alias "+r+" is not available");var s=this._sprites[r];n.start=s.start,n.end=s.end,n.speed=s.speed,delete n.sprite}if(n.offset&&(n.start=n.offset),!this.isLoaded)return new Promise((function(t,e){o.autoPlay=!0,o._autoPlayOptions=n,o._beginPreload((function(o,i,r){o?e(o):(n.loaded&&n.loaded(o,i,r),t(r))}))}));this.singleInstance&&this._removeInstances();var u=i.default.create(this);return this._instances.push(u),this.isPlaying=!0,u.once("end",(function(){n.complete&&n.complete(o),o._onComplete(u)})),u.once("stop",(function(){o._onComplete(u)})),u.play(n.start,n.end,n.speed,n.loop,n.fadeIn,n.fadeOut),u},e.prototype.stop=function(){if(!this.isPlayable)return this.autoPlay=!1,this._autoPlayOptions=null,this;this.isPlaying=!1;for(var t=this._instances.length-1;t>=0;t--)this._instances[t].stop();return this},e.prototype.pause=function(){for(var t=this._instances.length-1;t>=0;t--)this._instances[t].paused=!0;return this.isPlaying=!1,this},e.prototype.resume=function(){for(var t=this._instances.length-1;t>=0;t--)this._instances[t].paused=!1;return this.isPlaying=this._instances.length>0,this},e.prototype._beginPreload=function(t){this.src?this.useXHR?this._loadUrl(t):this._loadPath(t):this.srcBuffer?this._decode(this.srcBuffer,t):t?t(new Error("sound.src or sound.srcBuffer must be set")):console.error("sound.src or sound.srcBuffer must be set")},e.prototype._onComplete=function(t){if(this._instances){var e=this._instances.indexOf(t);e>-1&&this._instances.splice(e,1),this.isPlaying=this._instances.length>0}t.destroy()},e.prototype._removeInstances=function(){for(var t=this._instances.length-1;t>=0;t--)this._instances[t].destroy();this._instances.length=0},e.prototype._loadUrl=function(t){var e=this,n=new XMLHttpRequest,o=this.src;n.open("GET",o,!0),n.responseType="arraybuffer",n.onload=function(){e.srcBuffer=n.response,e._decode(n.response,t)},n.send()},e.prototype._loadPath=function(e){var n=this,o=t("fs"),i=this.src;o.readFile(i,(function(t,o){if(t)return console.error(t),void(e&&e(new Error("File not found "+n.src)));for(var i=new ArrayBuffer(o.length),r=new Uint8Array(i),s=0;s<o.length;++s)r[s]=o[s];n.srcBuffer=i,n._decode(i,e)}))},e.prototype._decode=function(t,e){var n=this;this._context.decode(t,(function(t,o){if(t)e&&e(t);else{n.isLoaded=!0,n.buffer=o;var i=void 0;n.autoPlay&&(i=n.play(n._autoPlayOptions)),e&&e(null,n,i)}}))},e}();n.default=u},{"./SoundInstance":5,"./SoundNodes":7,"./SoundSprite":8,"./index":17,fs:void 0}],4:[function(t,e,n){"use strict";var o,i=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(n,"__esModule",{value:!0});var r=function(t){function e(){var n=this,o=new e.AudioContext,i=o.createGain(),r=o.createDynamicsCompressor(),s=o.createAnalyser();return s.connect(i),i.connect(r),r.connect(o.destination),(n=t.call(this,s,i)||this)._ctx=o,n._offlineCtx=new e.OfflineAudioContext(1,2,o.sampleRate),n._unlocked=!1,n.gain=i,n.compressor=r,n.analyser=s,n.volume=1,n.muted=!1,n.paused=!1,"ontouchstart"in window&&"running"!==o.state&&(n._unlock(),n._unlock=n._unlock.bind(n),document.addEventListener("mousedown",n._unlock,!0),document.addEventListener("touchstart",n._unlock,!0),document.addEventListener("touchend",n._unlock,!0)),n}return i(e,t),e.prototype._unlock=function(){this._unlocked||(this.playEmptySound(),"running"===this._ctx.state&&(document.removeEventListener("mousedown",this._unlock,!0),document.removeEventListener("touchend",this._unlock,!0),document.removeEventListener("touchstart",this._unlock,!0),this._unlocked=!0))},e.prototype.playEmptySound=function(){var t=this._ctx.createBufferSource();t.buffer=this._ctx.createBuffer(1,1,22050),t.connect(this._ctx.destination),t.start(0,0,0)},Object.defineProperty(e,"AudioContext",{get:function(){var t=window;return t.AudioContext||t.webkitAudioContext||null},enumerable:!0,configurable:!0}),Object.defineProperty(e,"OfflineAudioContext",{get:function(){var t=window;return t.OfflineAudioContext||t.webkitOfflineAudioContext||null},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){t.prototype.destroy.call(this);var e=this._ctx;void 0!==e.close&&e.close(),this.analyser.disconnect(),this.gain.disconnect(),this.compressor.disconnect(),this.gain=null,this.analyser=null,this.compressor=null,this._offlineCtx=null,this._ctx=null},Object.defineProperty(e.prototype,"audioContext",{get:function(){return this._ctx},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"offlineContext",{get:function(){return this._offlineCtx},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"muted",{get:function(){return this._muted},set:function(t){this._muted=!!t,this.gain.gain.value=this._muted?0:this._volume},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"volume",{get:function(){return this._volume},set:function(t){this._volume=t,this._muted||(this.gain.gain.value=this._volume)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"paused",{get:function(){return this._paused},set:function(t){t&&"running"===this._ctx.state?this._ctx.suspend():t||"suspended"!==this._ctx.state||this._ctx.resume(),this._paused=t},enumerable:!0,configurable:!0}),e.prototype.toggleMute=function(){return this.muted=!this.muted,this._muted},e.prototype.decode=function(t,e){this._offlineCtx.decodeAudioData(t,(function(t){e(null,t)}),(function(){e(new Error("Unable to decode file"))}))},e}(t("./Filterable").default);n.default=r},{"./Filterable":1}],5:[function(t,e,n){"use strict";var o,i=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(n,"__esModule",{value:!0});var r=0,s=function(t){function e(e){var n=t.call(this)||this;return n.id=r++,n._parent=null,n._paused=!1,n._elapsed=0,n._init(e),n}return i(e,t),e.create=function(t){if(e._pool.length>0){var n=e._pool.pop();return n._init(t),n}return new e(t)},e.prototype.stop=function(){this._source&&(this._internalStop(),this.emit("stop"))},e.prototype.play=function(t,e,n,o,i,r){e&&console.assert(e>t,"End time is before start time"),this._paused=!1,this._source=this._parent.nodes.cloneBufferSource(),void 0!==n&&(this._source.playbackRate.value=n),this._speed=this._source.playbackRate.value,void 0!==o&&(this._loop=this._source.loop=!!o),this._loop&&void 0!==e&&(console.warn('Looping not support when specifying an "end" time'),this._loop=this._source.loop=!1),this._end=e;var s=this._source.buffer.duration;(i=this._toSec(i))>s&&(i=s),this._loop||(r=this._toSec(r))>s-i&&(r=s-i),this._duration=s,this._fadeIn=i,this._fadeOut=r,this._lastUpdate=this._now(),this._elapsed=t,this._source.onended=this._onComplete.bind(this),this._source.start(0,t,e?e-t:void 0),this.emit("start"),this._update(!0),this._enabled=!0},e.prototype._toSec=function(t){return t>10&&(t/=1e3),t||0},Object.defineProperty(e.prototype,"_enabled",{set:function(t){var e=this;this._parent.nodes.script.onaudioprocess=t?function(){e._update()}:null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"progress",{get:function(){return this._progress},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"paused",{get:function(){return this._paused},set:function(t){t!==this._paused&&(this._paused=t,t?(this._internalStop(),this.emit("paused")):(this.emit("resumed"),this.play(this._elapsed%this._duration,this._end,this._speed,this._loop,this._fadeIn,this._fadeOut)),this.emit("pause",t))},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.removeAllListeners(),this._internalStop(),this._source=null,this._speed=0,this._end=0,this._parent=null,this._elapsed=0,this._duration=0,this._loop=!1,this._fadeIn=0,this._fadeOut=0,this._paused=!1,e._pool.indexOf(this)<0&&e._pool.push(this)},e.prototype.toString=function(){return"[SoundInstance id="+this.id+"]"},e.prototype._now=function(){return this._parent.context.audioContext.currentTime},e.prototype._update=function(t){if(void 0===t&&(t=!1),this._source){var e=this._now(),n=e-this._lastUpdate;if(n>0||t){this._elapsed+=n,this._lastUpdate=e;var o=this._duration,i=this._elapsed*this._speed%o/o;if(this._fadeIn||this._fadeOut){var r=i*o,s=this._parent.nodes.gain.gain,u=this._parent.volume;if(this._fadeIn&&(r<=this._fadeIn&&i<1?s.value=u*(r/this._fadeIn):(s.value=u,this._fadeIn=0)),this._fadeOut&&r>=o-this._fadeOut){var a=(o-r)/this._fadeOut;s.value=u*a}}this._progress=i,this.emit("progress",this._progress,o)}}},e.prototype._init=function(t){this._parent=t},e.prototype._internalStop=function(){this._source&&(this._enabled=!1,this._source.onended=null,this._source.stop(),this._source=null,this._parent.volume=this._parent.volume)},e.prototype._onComplete=function(){this._source&&(this._enabled=!1,this._source.onended=null),this._source=null,this._progress=1,this.emit("progress",1,this._duration),this.emit("end",this)},e}(PIXI.utils.EventEmitter);s._pool=[],n.default=s},{}],6:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("./Filterable"),i=t("./filters"),r=t("./Sound"),s=t("./SoundContext"),u=t("./SoundInstance"),a=t("./SoundSprite"),c=t("./SoundUtils"),l=function(){function t(){this.supported&&(this._context=new s.default),this._sounds={},this.utils=c.default,this.filters=i,this.Sound=r.default,this.SoundInstance=u.default,this.SoundLibrary=t,this.SoundSprite=a.default,this.Filterable=o.default}return Object.defineProperty(t.prototype,"context",{get:function(){return this._context},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"filtersAll",{get:function(){return this._context.filters},set:function(t){this._context.filters=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"supported",{get:function(){return null!==s.default.AudioContext},enumerable:!0,configurable:!0}),t.prototype.add=function(t,e){if("object"==typeof t){var n={};for(var o in t){var i=this._getOptions(t[o],e);n[o]=this.add(o,i)}return n}if("string"==typeof t){if(console.assert(!this._sounds[t],"Sound with alias "+t+" already exists."),e instanceof r.default)return this._sounds[t]=e,e;i=this._getOptions(e);var s=new r.default(this.context,i);return this._sounds[t]=s,s}},t.prototype._getOptions=function(t,e){var n;return n="string"==typeof t?{src:t}:t instanceof ArrayBuffer?{srcBuffer:t}:t,Object.assign(n,e||{})},t.prototype.remove=function(t){return this.exists(t,!0),this._sounds[t].destroy(),delete this._sounds[t],this},Object.defineProperty(t.prototype,"volumeAll",{get:function(){return this._context.volume},set:function(t){this._context.volume=t},enumerable:!0,configurable:!0}),t.prototype.pauseAll=function(){return this._context.paused=!0,this},t.prototype.resumeAll=function(){return this._context.paused=!1,this},t.prototype.muteAll=function(){return this._context.muted=!0,this},t.prototype.unmuteAll=function(){return this._context.muted=!1,this},t.prototype.removeAll=function(){for(var t in this._sounds)this._sounds[t].destroy(),delete this._sounds[t];return this},t.prototype.stopAll=function(){for(var t in this._sounds)this._sounds[t].stop();return this},t.prototype.exists=function(t,e){void 0===e&&(e=!1);var n=!!this._sounds[t];return e&&console.assert(n,"No sound matching alias '"+t+"'."),n},t.prototype.find=function(t){return this.exists(t,!0),this._sounds[t]},t.prototype.play=function(t,e){return this.find(t).play(e)},t.prototype.stop=function(t){return this.find(t).stop()},t.prototype.pause=function(t){return this.find(t).pause()},t.prototype.resume=function(t){return this.find(t).resume()},t.prototype.volume=function(t,e){var n=this.find(t);return void 0!==e&&(n.volume=e),n.volume},t.prototype.duration=function(t){return this.find(t).duration},t.prototype.destroy=function(){this.removeAll(),this._sounds=null,this._context=null},t}();n.default=l},{"./Filterable":1,"./Sound":3,"./SoundContext":4,"./SoundInstance":5,"./SoundSprite":8,"./SoundUtils":9,"./filters":16}],7:[function(t,e,n){"use strict";var o,i=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(n,"__esModule",{value:!0});var r=function(t){function e(n){var o=this,i=n.audioContext,r=i.createBufferSource(),s=i.createScriptProcessor(e.BUFFER_SIZE),u=i.createGain(),a=i.createAnalyser();return r.connect(a),a.connect(u),u.connect(n.destination),s.connect(n.destination),(o=t.call(this,a,u)||this).context=n,o.bufferSource=r,o.script=s,o.gain=u,o.analyser=a,o}return i(e,t),e.prototype.destroy=function(){t.prototype.destroy.call(this),this.bufferSource.disconnect(),this.script.disconnect(),this.gain.disconnect(),this.analyser.disconnect(),this.bufferSource=null,this.script=null,this.gain=null,this.analyser=null,this.context=null},e.prototype.cloneBufferSource=function(){var t=this.bufferSource,e=this.context.audioContext.createBufferSource();return e.buffer=t.buffer,e.playbackRate.value=t.playbackRate.value,e.loop=t.loop,e.connect(this.destination),e},e}(t("./Filterable").default);r.BUFFER_SIZE=256,n.default=r},{"./Filterable":1}],8:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function t(t,e){this.parent=t,Object.assign(this,e),this.duration=this.end-this.start,console.assert(this.duration>0,"End time must be after start time")}return t.prototype.play=function(t){return this.parent.play(Object.assign({complete:t,speed:this.speed||this.parent.speed,end:this.end,start:this.start}))},t.prototype.destroy=function(){this.parent=null},t}();n.default=o},{}],9:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("uuid/v4"),i=t("./index"),r=t("./Sound"),s=function(){function t(){}return t.sineTone=function(t,e){void 0===t&&(t=200),void 0===e&&(e=1);for(var n=i.default.context,o=new r.default(n,{singleInstance:!0}),s=n.audioContext.createBuffer(1,48e3*e,48e3),u=s.getChannelData(0),a=0;a<u.length;a++){var c=t*(a/s.sampleRate)*Math.PI;u[a]=2*Math.sin(c)}return o.buffer=s,o.isLoaded=!0,o},t.render=function(t,e){e=Object.assign({width:512,height:128,fill:"black"},e||{}),console.assert(!!t.buffer,"No buffer found, load first");var n=document.createElement("canvas");n.width=e.width,n.height=e.height;var o=n.getContext("2d");o.fillStyle=e.fill;for(var i=t.buffer.getChannelData(0),r=Math.ceil(i.length/e.width),s=e.height/2,u=0;u<e.width;u++){for(var a=1,c=-1,l=0;l<r;l++){var d=i[u*r+l];d<a&&(a=d),d>c&&(c=d)}o.fillRect(u,(1+a)*s,1,Math.max(1,(c-a)*s))}return PIXI.BaseTexture.fromCanvas(n)},t.playOnce=function(t,e){var n=o();return i.default.add(n,{src:t,preload:!0,autoPlay:!0,loaded:function(t){t&&(console.error(t),i.default.remove(n),e&&e(t))},complete:function(){i.default.remove(n),e&&e(null)}}),n},t}();n.default=s},{"./Sound":3,"./index":17,"uuid/v4":20}],10:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("./Sound"),i=t("./SoundLibrary").default.prototype,r=o.default.prototype;i.sound=function(t){return console.warn("PIXI.sound.sound is deprecated, use PIXI.sound.find"),this.find(t)},i.panning=function(t,e){return console.warn("PIXI.sound.panning is deprecated, use PIXI.sound.filters.StereoPan"),0},i.addMap=function(t,e){return console.warn("PIXI.sound.addMap is deprecated, use PIXI.sound.add"),this.add(t,e)},Object.defineProperty(i,"SoundUtils",{get:function(){return console.warn("PIXI.sound.SoundUtils is deprecated, use PIXI.sound.utils"),this.utils}}),Object.defineProperty(r,"block",{get:function(){return console.warn("PIXI.sound.Sound.prototype.block is deprecated, use singleInstance instead"),this.singleInstance},set:function(t){console.warn("PIXI.sound.Sound.prototype.block is deprecated, use singleInstance instead"),this.singleInstance=t}}),Object.defineProperty(r,"loaded",{get:function(){return console.warn("PIXI.sound.Sound.prototype.loaded is deprecated, use constructor option instead"),null},set:function(t){console.warn("PIXI.sound.Sound.prototype.loaded is deprecated, use constructor option instead")}}),Object.defineProperty(r,"complete",{get:function(){return console.warn("PIXI.sound.Sound.prototype.complete is deprecated, use constructor option instead"),null},set:function(t){console.warn("PIXI.sound.Sound.prototype.complete is deprecated, use constructor option instead")}})},{"./Sound":3,"./SoundLibrary":6}],11:[function(t,e,n){"use strict";var o,i=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(n,"__esModule",{value:!0});var r=t("./Filter"),s=t("../index"),u=function(t){function e(e){void 0===e&&(e=0);var n=this,o=s.default.context.audioContext.createWaveShaper();return(n=t.call(this,o)||this)._distortion=o,n.amount=e,n}return i(e,t),Object.defineProperty(e.prototype,"amount",{get:function(){return this._amount},set:function(t){t*=1e3,this._amount=t;for(var e,n=44100,o=new Float32Array(n),i=Math.PI/180,r=0;r<n;++r)e=2*r/n-1,o[r]=(3+t)*e*20*i/(Math.PI+t*Math.abs(e));this._distortion.curve=o,this._distortion.oversample="4x"},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this._distortion=null,t.prototype.destroy.call(this)},e}(r.default);n.default=u},{"../index":17,"./Filter":13}],12:[function(t,e,n){"use strict";var o,i=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(n,"__esModule",{value:!0});var r=t("./Filter"),s=t("../index"),u=function(t){function e(n,o,i,r,u,a,c,l,d,f){void 0===n&&(n=0),void 0===o&&(o=0),void 0===i&&(i=0),void 0===r&&(r=0),void 0===u&&(u=0),void 0===a&&(a=0),void 0===c&&(c=0),void 0===l&&(l=0),void 0===d&&(d=0),void 0===f&&(f=0);var p=this,h=[{f:e.F32,type:"lowshelf",gain:n},{f:e.F64,type:"peaking",gain:o},{f:e.F125,type:"peaking",gain:i},{f:e.F250,type:"peaking",gain:r},{f:e.F500,type:"peaking",gain:u},{f:e.F1K,type:"peaking",gain:a},{f:e.F2K,type:"peaking",gain:c},{f:e.F4K,type:"peaking",gain:l},{f:e.F8K,type:"peaking",gain:d},{f:e.F16K,type:"highshelf",gain:f}].map((function(t){var e=s.default.context.audioContext.createBiquadFilter();return e.type=t.type,e.gain.value=t.gain,e.Q.value=1,e.frequency.value=t.f,e}));(p=t.call(this,h[0],h[h.length-1])||this).bands=h,p.bandsMap={};for(var _=0;_<p.bands.length;_++){var y=p.bands[_];_>0&&p.bands[_-1].connect(y),p.bandsMap[y.frequency.value]=y}return p}return i(e,t),e.prototype.setGain=function(t,e){if(void 0===e&&(e=0),!this.bandsMap[t])throw"No band found for frequency "+t;this.bandsMap[t].gain.value=e},e.prototype.reset=function(){this.bands.forEach((function(t){t.gain.value=0}))},e.prototype.destroy=function(){this.bands.forEach((function(t){t.disconnect()})),this.bands=null,this.bandsMap=null},e}(r.default);u.F32=32,u.F64=64,u.F125=125,u.F250=250,u.F500=500,u.F1K=1e3,u.F2K=2e3,u.F4K=4e3,u.F8K=8e3,u.F16K=16e3,n.default=u},{"../index":17,"./Filter":13}],13:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function t(t,e){this.destination=t,this.source=e||t}return t.prototype.connect=function(t){this.source.connect(t)},t.prototype.disconnect=function(){this.source.disconnect()},t.prototype.destroy=function(){this.disconnect(),this.destination=null,this.source=null},t}();n.default=o},{}],14:[function(t,e,n){"use strict";var o,i=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(n,"__esModule",{value:!0});var r=t("./Filter"),s=t("../index"),u=function(t){function e(e,n,o){void 0===e&&(e=3),void 0===n&&(n=2),void 0===o&&(o=!1);var i=this,r=s.default.context.audioContext.createConvolver();return(i=t.call(this,r)||this)._convolver=r,i._seconds=i._clamp(e,1,50),i._decay=i._clamp(n,0,100),i._reverse=o,i._rebuild(),i}return i(e,t),e.prototype._clamp=function(t,e,n){return Math.min(n,Math.max(e,t))},Object.defineProperty(e.prototype,"seconds",{get:function(){return this._seconds},set:function(t){this._seconds=this._clamp(t,1,50),this._rebuild()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"decay",{get:function(){return this._decay},set:function(t){this._decay=this._clamp(t,0,100),this._rebuild()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"reverse",{get:function(){return this._reverse},set:function(t){this._reverse=t,this._rebuild()},enumerable:!0,configurable:!0}),e.prototype._rebuild=function(){for(var t,e=s.default.context.audioContext,n=e.sampleRate,o=n*this._seconds,i=e.createBuffer(2,o,n),r=i.getChannelData(0),u=i.getChannelData(1),a=0;a<o;a++)t=this._reverse?o-a:a,r[a]=(2*Math.random()-1)*Math.pow(1-t/o,this._decay),u[a]=(2*Math.random()-1)*Math.pow(1-t/o,this._decay);this._convolver.buffer=i},e.prototype.destroy=function(){this._convolver=null,t.prototype.destroy.call(this)},e}(r.default);n.default=u},{"../index":17,"./Filter":13}],15:[function(t,e,n){"use strict";var o,i=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(n,"__esModule",{value:!0});var r=t("./Filter"),s=t("../index"),u=function(t){function e(e){void 0===e&&(e=0);var n,o,i,r=this,u=s.default.context.audioContext;return u.createStereoPanner?i=n=u.createStereoPanner():((o=u.createPanner()).panningModel="equalpower",i=o),(r=t.call(this,i)||this)._stereo=n,r._panner=o,r.pan=e,r}return i(e,t),Object.defineProperty(e.prototype,"pan",{get:function(){return this._pan},set:function(t){this._pan=t,this._stereo?this._stereo.pan.value=t:this._panner.setPosition(t,0,1-Math.abs(t))},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){t.prototype.destroy.call(this),this._stereo=null,this._panner=null},e}(r.default);n.default=u},{"../index":17,"./Filter":13}],16:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("./Filter");n.Filter=o.default;var i=t("./EqualizerFilter");n.EqualizerFilter=i.default;var r=t("./DistortionFilter");n.DistortionFilter=r.default;var s=t("./StereoFilter");n.StereoFilter=s.default;var u=t("./ReverbFilter");n.ReverbFilter=u.default},{"./DistortionFilter":11,"./EqualizerFilter":12,"./Filter":13,"./ReverbFilter":14,"./StereoFilter":15}],17:[function(t,e,n){(function(e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("./LoaderMiddleware"),i=t("./SoundLibrary");t("./deprecations");var r=new i.default;if(void 0===e.PIXI)throw new Error("pixi.js is required");void 0!==PIXI.loaders&&o.install(),Object.defineProperty(PIXI,"sound",{get:function(){return r}}),n.default=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./LoaderMiddleware":2,"./SoundLibrary":6,"./deprecations":10}],18:[function(t,e,n){for(var o=[],i=0;i<256;++i)o[i]=(i+256).toString(16).substr(1);e.exports=function(t,e){var n=e||0,i=o;return i[t[n++]]+i[t[n++]]+i[t[n++]]+i[t[n++]]+"-"+i[t[n++]]+i[t[n++]]+"-"+i[t[n++]]+i[t[n++]]+"-"+i[t[n++]]+i[t[n++]]+"-"+i[t[n++]]+i[t[n++]]+i[t[n++]]+i[t[n++]]+i[t[n++]]+i[t[n++]]}},{}],19:[function(t,e,n){(function(t){var n,o=t.crypto||t.msCrypto;if(o&&o.getRandomValues){var i=new Uint8Array(16);n=function(){return o.getRandomValues(i),i}}if(!n){var r=new Array(16);n=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),r[e]=t>>>((3&e)<<3)&255;return r}}e.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],20:[function(t,e,n){var o=t("./lib/rng"),i=t("./lib/bytesToUuid");e.exports=function(t,e,n){var r=e&&n||0;"string"==typeof t&&(e="binary"==t?new Array(16):null,t=null);var s=(t=t||{}).random||(t.rng||o)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e)for(var u=0;u<16;++u)e[r+u]=s[u];return e||i(s)}},{"./lib/bytesToUuid":18,"./lib/rng":19}]},{},[17])(17)}));