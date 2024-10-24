(()=>{"use strict";var t,e=(t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)},function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)});const o=function(t){function o(e){var n=t.call(this,e)||this;return o.NAME="game"+o.NUM++,n.view.style.width="100%",document.body.prepend(n.view),n}return e(o,t),Object.defineProperty(o.prototype,"stageWidth",{get:function(){return this.screen.width},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"stageHeight",{get:function(){return this.screen.height},enumerable:!1,configurable:!0}),o.NAME="game",o.NUM=0,o}(PIXI.Application);var n=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const r=function(t){function e(o){var n=t.call(this,e.NAME,o)||this;return n.loadingScene.on("init_complete",n.initComplete,n),n}return n(e,t),e.prototype.initComplete=function(){var t=this,e=new PIXI.Loader;e.add(["./resources/images/assets.json","./resources/images/animal1.png","./resources/images/animal2.png","./resources/images/animal3.png","./resources/images/animal4.png","./resources/images/animal5.png","./resources/images/animal6.png","./resources/images/animal7.png","./resources/images/animal8.png","./resources/images/sp_end_background.jpg","./resources/images/sp_main_background.jpg","./resources/images/sp_start_background.jpg"]),e.once("complete",(function(){setTimeout((function(){t.sendNotification(X.TO_START,{from:t.loadingScene})}),500)})),e.on("progress",(function(e){console.log("加载百分比"+e.progress+"%"),t.loadingScene.setProgress(e.progress)})),e.load(),PIXI.sound.add({worldscenebgm:"./resources/music/worldscenebgm.mp3",gamescenebgm:"./resources/music/gamescenebgm.mp3",drop:"./resources/music/drop.mp3",swap:"./resources/music/swap.mp3",click:"./resources/music/click.mp3"})},Object.defineProperty(e.prototype,"loadingScene",{get:function(){return this.viewComponent},enumerable:!1,configurable:!0}),e.NAME="load_scene_mediator",e}(puremvc.Mediator);var i=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const a=function(t){function e(e){var o=t.call(this)||this;return o.game=null,o.stageWidth=0,o.stageHeight=0,o.game=e,o.stageWidth=e.stageWidth,o.stageHeight=e.stageHeight,o}return i(e,t),e.prototype.init=function(t){},e.prototype.destroy=function(){},e.prototype.removeAllChildren=function(t,e,o){void 0===o&&(o=1);var n=t.children;if(n&&n.length>0)for(var r=n.length-1;r>=0;r--){var i=n[r];console.log(o,r,i.name),this.removeAllChildren(i,o+1),i.parent&&i.parent.removeChild(i)}e&&t.parent&&t.parent.removeChild(t)},e}(PIXI.Container);var c=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),s=PIXI.Container,u=PIXI.Text,l=PIXI.Graphics;const p=function(t){function e(e,o){void 0===e&&(e=""),void 0===o&&(o={fontSize:32,color:16777215,bgColor:4423155});var n=t.call(this)||this,r=new l;n.addChild(r);var i=o.fontSize||32,a=o.color||16777215,c=new u(e,{fill:a,fontSize:i});c.anchor.set(.5,.5),n.addChild(c);var s=c.width+40,p=c.height+20,f=o.bgColor||16711680;return r.beginFill(f),r.drawRoundedRect(-s/2,-p/2,s,p,8),r.endFill(),n.interactive=!0,n.on("pointerdown",(function(){PIXI.sound.play("click")})),n}return c(e,t),e}(s);var f=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),d=PIXI.Sprite;const h=function(t){function e(e){return t.call(this,e)||this}return f(e,t),e.prototype.init=function(){var t,e,o,n,r,i=this;this.addChild(d.from("./resources/images/sp_start_background.jpg")),t=new PIXI.Container,this.addChild(t),r=new PIXI.Text("开心消消乐",{fill:"#FFFFFF"}),t.addChild(r),r.x=this.stageWidth/2,r.y=this.stageHeight,r.anchor.x=.5,r.anchor.y=1,r.alpha=0,window.TweenMax.to(r,1,{alpha:1,ease:window.Strong.easeOut,delay:1}),window.TweenMax.to(r.position,1,{y:this.stageHeight-760,ease:window.Elastic.easeOut,delay:.8}),r.name="txt1",r.rotation=-.05,window.TweenMax.to(r,.1,{rotation:.1,ease:window.Linear.easeNone,repeat:-1,yoyo:!0,delay:1.2}),(e=PIXI.Sprite.from("pic4.jpg")).position.x=0,e.position.y=100,t.addChild(e),e.alpha=0,window.TweenMax.to(e,.6,{alpha:1}),(o=PIXI.Sprite.from("pic5.png")).anchor.x=.5,o.anchor.y=.5,o.position.x=this.stageWidth/2,o.position.y=this.stageHeight/2,t.addChild(o),o.scale.x=o.scale.y=0,window.TweenMax.to(o.scale,1,{x:1,y:1,ease:window.Elastic.easeOut,delay:.8}),(n=new p("开始")).position.x=this.stageWidth/2,n.position.y=o.position.y+240,t.addChild(n),n.scale.x=n.scale.y=0,window.TweenMax.to(n.scale,1,{x:1,y:1,ease:window.Elastic.easeOut,delay:.9}),n.interactive=!0,n.mousedown=n.touchstart=function(){i.sceneOut()}},e.prototype.sceneIn=function(){window.TweenMax.to(this,1,{alpha:1})},e.prototype.sceneOut=function(){var t=this;window.TweenMax.to(this,.4,{alpha:0,onComplete:function(){t.emit(e.CLICK_START)}})},e.NAME="start_scene",e.CLICK_START="click_start",e}(a);var y=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const _=function(t){function e(o){var n=t.call(this,e.NAME,o)||this;return n.startScene.on(h.CLICK_START,(function(){n.sendNotification(X.TO_GAME,{from:n.startScene})})),n}return y(e,t),e.prototype.listNotificationInterests=function(){return[]},e.prototype.handleNotification=function(t){t.getName()},Object.defineProperty(e.prototype,"startScene",{get:function(){return this.viewComponent},enumerable:!1,configurable:!0}),e.NAME="start_scene_mediator",e}(puremvc.Mediator);var w=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const g=function(t){function e(){var o=t.call(this,e.NAME)||this;return o.map=null,o.swapFruitStack=[],o.score=0,o._time=0,o.map=new v(o),o}return w(e,t),e.prototype.addSwapFruit=function(t){if(this.swapFruitStack.push(t),this.swapFruitStack.length>=2){var o=this.swapFruitStack[this.swapFruitStack.length-2],n=this.swapFruitStack[this.swapFruitStack.length-1];for(this.check4direction(o.row,o.col,n.row,n.col)?(PIXI.sound.play("swap"),this.map.swap(o.row,o.col,n.row,n.col),this.sendNotification(e.SWAP_FRUIT,[o,n],"success")):this.sendNotification(e.SWAP_FRUIT,[o,n],"fail");this.swapFruitStack.length;)this.swapFruitStack.shift()}},e.prototype.check4direction=function(t,e,o,n){return Math.abs(e-n)<=1&&t===o||Math.abs(t-o)<=1&&e===n},Object.defineProperty(e.prototype,"time",{get:function(){return this._time},set:function(t){this._time=t,this.sendNotification(e.CHANGE_TIME,this._time)},enumerable:!1,configurable:!0}),e.NAME="game_proxy",e.CHANGE_SCORE="change_score",e.CHANGE_TIME="change_time",e.ADD_FRUIT="add_fruit",e.DELETE_FRUIT="delete_fruit",e.DROP_FRUIT="drop_fruit",e.SWAP_FRUIT="swap_fruit",e}(puremvc.Proxy);var m=function(t,e,o){if(o||2===arguments.length)for(var n,r=0,i=e.length;r<i;r++)!n&&r in e||(n||(n=Array.prototype.slice.call(e,0,r)),n[r]=e[r]);return t.concat(n||Array.prototype.slice.call(e))};const v=function(){function t(t){this.rows=10,this.cols=5,this.data=[[2,4,2,4,2],[4,5,4,5,4],[4,5,5,5,4],[3,4,5,4,3],[1,1,4,1,1],[6,3,6,3,6],[3,7,3,7,3],[3,7,7,7,3],[2,3,7,3,2],[8,8,3,8,8]],this.proxy=null,this.proxy=t}return t.prototype.swap=function(t,e,o,n){var r=this,i=this.data[t][e];this.data[t][e]=this.data[o][n],this.data[o][n]=i,setTimeout((function(){r.check()}),300)},t.prototype.check=function(){var e=this,o=m(m([],this.horizontalCheck(),!0),this.verticalCheck(),!0).filter((function(t){return t}));if(console.log(o),o.length)PIXI.sound.play("drop"),o.forEach((function(t){var o=t[0],n=t[1];e.data[o][n]=null})),this.proxy.sendNotification(g.DELETE_FRUIT,o),setTimeout((function(){for(var t={},o=0;o<e.cols;o++){t[o]=[];for(var n,r=function(){if(null===e.data[i][o])for(var r=i;r--;)null!==e.data[r][o]&&((n=t[o].find((function(t){return t.row===r&&t.col===o})))||(n={row:r,col:o,drop:0},t[o].push(n)),n.drop++)},i=0;i<e.rows;i++)r();t[o].sort((function(t,e){return e.row-t.row}))}for(var a in t)t[a].forEach((function(t){var o=t.row,n=t.col,r=t.drop,i=e.data[o][n];e.data[o][n]=null,e.data[o+r][n]=i}));console.log(e.data),e.proxy.sendNotification(g.DROP_FRUIT,t),setTimeout((function(){e.check()}),300)}),1e3);else{for(var n=[],r=0;r<this.cols;r++)for(var i=0;i<this.rows;i++)null===this.data[i][r]&&(this.data[i][r]=this.getAnimalIndex(),n.push({row:i,col:r,value:this.data[i][r],animate:{from:{x:this.cols*t.GridWidth/2,y:0},to:{x:r*t.GridWidth+t.GridWidth/2,y:i*t.GridHeight+t.GridHeight/2}}}));n.length&&(this.proxy.sendNotification(g.ADD_FRUIT,n),this.check())}},t.prototype.horizontalCheck=function(){for(var t=[],e=0;e<this.rows;e++)for(var o=1,n=0;n<this.cols;n++){var r=this.data[e][n],i=this.data[e][n+1];if(null!=r||null!==i)if(r===i)o++;else{if(o>=3){this.proxy.score+=o,this.proxy.sendNotification(g.CHANGE_SCORE,this.proxy.score);for(var a=o,c="";a;){var s=e,u=n-(a-1);t.push([s,u]),c+="(".concat(s,",").concat(u,")"),a--}console.log("横向：连续".concat(o,"个相同").concat(c,",值为").concat(r))}o=1}}return t},t.prototype.verticalCheck=function(){for(var t=[],e=0;e<this.cols;e++)for(var o=1,n=0;n<this.rows;n++){var r=this.data[n][e],i=this.data[n+1]&&this.data[n+1][e]||null;if(null!=r||null!==i)if(r===i)o++;else{if(o>=3){this.proxy.score+=o,this.proxy.sendNotification(g.CHANGE_SCORE,this.proxy.score);for(var a=o,c="";a;){var s=n-(a-1),u=e;t.push([s,u]),c+="(".concat(s,",").concat(u,")"),a--}console.log("纵向：连续".concat(o,"个相同").concat(c,",值为").concat(r))}o=1}}return t},t.prototype.getAnimalIndex=function(){return parseInt(String(8*Math.random()))+1},t.GridWidth=80,t.GridHeight=80,t}();var T=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const C=function(t){function e(e,o,n){var r=t.call(this)||this;r.text=null,r.row=null,r.col=null,r.value=null,r.row=e,r.col=o,r.value=n;var i=PIXI.Sprite.from("./resources/images/animal".concat(n,".png"));r.addChild(i),i.anchor.set(.5);var a=new PIXI.Text("",{fontSize:10,fill:16777215});return r.addChild(a),a.anchor.set(.5,.5),r.text=a,r.buttonMode=!0,r.interactive=!0,r.update(),r}return T(e,t),e.prototype.setRowCol=function(t,e,o){void 0===o&&(o=!0),this.row=t,this.col=e,this.update();var n=e*v.GridWidth+v.GridWidth/2,r=t*v.GridHeight+v.GridHeight/2;o?window.TweenMax.to(this,.3,{x:n,y:r,ease:"none"}):(this.x=n,this.y=r)},e.prototype.update=function(){},e}(PIXI.Container);var O=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),I=PIXI.Container,b=PIXI.Graphics,S=PIXI.Sprite,A=PIXI.Text;const E=function(t){function e(e){var o=t.call(this,e)||this;return o.fruits={},o.timeText=null,o.scoreText=null,o.animalContainer=null,o}return O(e,t),e.prototype.init=function(e){var o=this;t.prototype.init.call(this,e),this.filters=[new PIXI.filters.GodrayFilter({alpha:.5})];var n=e.rows,r=e.cols,i=e.data;this.addChild(S.from("sp_main_background.jpg"));var a=new A("",{fill:16777215,fontSize:48});this.addChild(a),a.anchor.set(.5,0),a.x=this.stageWidth/4*1,a.y=10,a.filters=[new PIXI.filters.GlowFilter({color:65390,distance:15,innerStrength:.1,outerStrength:2.5})],this.timeText=a,this.updateTime(60);var c=new A("",{fill:16777215,fontSize:48});this.addChild(c),c.anchor.set(.5,0),c.x=this.stageWidth/4*3,c.y=10,c.filters=[new PIXI.filters.GlowFilter({color:65390,distance:15,innerStrength:.1,outerStrength:2.5})],this.scoreText=c,this.updateScore(0);var s=new I;this.addChild(s),s.x=(this.stageWidth-r*v.GridWidth)/2,s.y=(this.stageHeight-n*v.GridHeight)/2,this.animalContainer=s;var u=new b;s.addChild(u);for(var l=0;l<n;l++)for(var p=0;p<r;p++){var f=p*v.GridWidth,d=l*v.GridHeight;u.beginFill(0,l%2==0?p%2==0?.6:.4:p%2!=0?.6:.4),u.moveTo(f,d),u.lineTo(f+v.GridWidth,d),u.lineTo(f+v.GridWidth,d+v.GridHeight),u.lineTo(f,d+v.GridHeight),u.closePath(),u.endFill(),this.addFruit({row:l,col:p,value:i[l][p],animate:{from:{x:r*v.GridWidth/2,y:0},to:{x:p*v.GridWidth+v.GridWidth/2,y:l*v.GridHeight+v.GridHeight/2}}})}setTimeout((function(){o.emit("init_complete")}),1e3)},e.prototype.addFruit=function(t){var o=this;Array.isArray(t)||(t=[t]),t.forEach((function(t){var n=t.row,r=t.col,i=t.value,a=t.animate,c=new C(n,r,i);if(o.animalContainer.addChild(c),a){var s=a.from,u=a.to;window.TweenMax.fromTo([c],.3,s,u)}else c.x=r*v.GridWidth+v.GridWidth/2,c.y=n*v.GridHeight+v.GridHeight/2;c.on("pointerdown",(function(t){c.filters=[new PIXI.filters.OutlineFilter(2,10092441)],o.emit(e.CLICK_FRUIT,t.currentTarget)})),o.fruits["".concat(n,"_").concat(r)]=c}))},e.prototype.swapFruit=function(t,e){var o=t[0],n=t[1],r=o.row,i=o.col,a=n.row,c=n.col,s=this.fruits["".concat(r,"_").concat(i)],u=this.fruits["".concat(a,"_").concat(c)];"success"===e?(s.setRowCol(a,c),u.setRowCol(r,i),this.fruits["".concat(r,"_").concat(i)]=u,this.fruits["".concat(a,"_").concat(c)]=s,setTimeout((function(){s.filters=[],u.filters=[]}),300)):"fail"===e&&(s.rotation=-.05,u.rotation=-.05,window.TweenMax.to(s,.1,{rotation:.1,ease:window.Linear.easeNone,repeat:5,yoyo:!0}),window.TweenMax.to(u,.1,{rotation:.1,ease:window.Linear.easeNone,repeat:5,yoyo:!0}),setTimeout((function(){s.filters=[],u.filters=[]}),300))},e.prototype.deleteFruit=function(t){var e=this,o=[];t.forEach((function(t){o.find((function(e){return t[0]===e[0]&&t[1]===e[1]}))||o.push(t)})),o.forEach((function(t){var o=t[0],n=t[1],r=e.fruits["".concat(o,"_").concat(n)];window.TweenMax.to(r.scale,1,{x:0,y:0,ease:"power1.inOut"}),window.TweenMax.to(r,1,{alpha:0,ease:"none"}),e.fruits["".concat(o,"_").concat(n)]=null}))},e.prototype.dropFruit=function(t){var e=this;for(var o in t)t[o].forEach((function(t){var o=t.row,n=t.col,r=t.drop,i=e.fruits["".concat(o,"_").concat(n)];i.setRowCol(o+r,n),e.fruits["".concat(o,"_").concat(n)]=null,e.fruits["".concat(o+r,"_").concat(n)]=i}))},e.prototype.updateScore=function(t){this.scoreText.text="Score: "+t},e.prototype.updateTime=function(t){this.timeText.text="Time: "+t},e.NAME="game_scene",e.CLICK_FRUIT="click_fruit",e}(a);var x=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const P=function(t){function e(){return t.call(this)||this}return x(e,t),e.prototype.execute=function(t){var o=this;console.log("SceneCommand notification:",t);var n=t.getName(),r=t.getBody(),i=this.facade.retrieveProxy(g.NAME);switch(n){case e.ADD_FRUIT_STACK:i.addSwapFruit(r);break;case e.CHECK:i.map.check();break;case e.GAME_START:i.time=60;var a=setInterval((function(){i.time--,i.time<=0&&(a&&clearInterval(a),o.sendNotification(e.GAME_OVER))}),1e3);break;case e.GAME_OVER:var c=this.facade.retrieveMediator(N.NAME).gameScene;this.sendNotification(X.TO_END,{from:c})}},e.ADD_FRUIT_STACK="add_fruit_stack",e.CHECK="check",e.GAME_START="game_start",e.GAME_OVER="game_over",e}(puremvc.SimpleCommand);var M=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const N=function(t){function e(o){var n=t.call(this,e.NAME,o)||this;return n.gameScene.on("init_complete",(function(){n.sendNotification(P.CHECK)})),n.gameScene.on(E.CLICK_FRUIT,(function(t){var e=t.row,o=t.col,r=t.value;n.sendNotification(P.ADD_FRUIT_STACK,{row:e,col:o,value:r})})),n}return M(e,t),e.prototype.listNotificationInterests=function(){return[g.ADD_FRUIT,g.DELETE_FRUIT,g.DROP_FRUIT,g.SWAP_FRUIT,g.CHANGE_SCORE,g.CHANGE_TIME]},e.prototype.handleNotification=function(t){console.log("GameSceneMediator notification:",t);var e=t.getName(),o=t.getBody(),n=t.getType();switch(e){case g.ADD_FRUIT:this.gameScene.addFruit(o);break;case g.DELETE_FRUIT:this.gameScene.deleteFruit(o);break;case g.DROP_FRUIT:this.gameScene.dropFruit(o);break;case g.SWAP_FRUIT:this.gameScene.swapFruit(o,n);break;case g.CHANGE_SCORE:this.gameScene.updateScore(o);break;case g.CHANGE_TIME:this.gameScene.updateTime(o)}},Object.defineProperty(e.prototype,"gameScene",{get:function(){return this.viewComponent},enumerable:!1,configurable:!0}),e.NAME="game_scene_mediator",e}(puremvc.Mediator);var j=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),F=PIXI.Sprite;const R=function(t){function e(e){return t.call(this,e)||this}return j(e,t),e.prototype.init=function(){var t=this;this.addChild(F.from("./resources/images/sp_end_background.jpg"));var o=new p("再来一次");o.x=this.stageWidth/2,o.y=this.stageHeight/2,o.interactive=!0,o.on("pointerdown",(function(){return t.emit(e.CLICK_AGAIN)})),this.addChild(o);var n=new p("重新开始");n.x=this.stageWidth/2,n.y=this.stageHeight/2+110,n.interactive=!0,n.on("pointerdown",(function(){return t.emit(e.CLICK_RESTART)})),this.addChild(n)},e.NAME="end_scene",e.CLICK_AGAIN="click_again",e.CLICK_RESTART="click_restart",e}(a);var G=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const k=function(t){function e(o){var n=t.call(this,e.NAME,o)||this;return n.endScene.on(R.CLICK_AGAIN,(function(){n.sendNotification(X.TO_GAME,{from:n.endScene})})),n.endScene.on(R.CLICK_RESTART,(function(){n.sendNotification(X.TO_START,{from:n.endScene})})),n}return G(e,t),e.prototype.listNotificationInterests=function(){return[]},e.prototype.handleNotification=function(t){t.getName()},Object.defineProperty(e.prototype,"endScene",{get:function(){return this.viewComponent},enumerable:!1,configurable:!0}),e.NAME="end_scene_mediator",e}(puremvc.Mediator);var H=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const X=function(t){function e(){return t.call(this)||this}return H(e,t),e.prototype.execute=function(t){console.log("SceneCommand notification:",t);var o=this.facade.game,n=t.getName(),i=t.getBody().from;switch(i&&(i.destroy(),i.parent&&i.parent.removeChild(i)),n){case e.TO_LOADING:var a=this.facade.retrieveMediator(r.NAME).loadingScene;o.stage.addChild(a),a.init();break;case e.TO_START:var c=this.facade.retrieveMediator(_.NAME).startScene;o.stage.addChild(c),c.sceneIn(),c.init(),PIXI.sound.stopAll(),PIXI.sound.play("worldscenebgm",{loop:!0});break;case e.TO_GAME:var s=this.facade.retrieveMediator(N.NAME).gameScene;o.stage.addChild(s),s.init(this.facade.retrieveProxy(g.NAME).map),this.sendNotification(P.GAME_START),PIXI.sound.stopAll(),PIXI.sound.play("gamescenebgm",{loop:!0});break;case e.TO_END:var u=this.facade.retrieveMediator(k.NAME).endScene;o.stage.addChild(u),u.init(),PIXI.sound.stop("gamescenebgm"),PIXI.sound.play("worldscenebgm",{loop:!0})}},e.TO_LOADING="to_loading",e.TO_START="to_start",e.TO_GAME="to_game",e.TO_END="to_end",e}(puremvc.SimpleCommand);var W=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const D=function(t){function e(){return t.call(this)||this}return W(e,t),e.prototype.execute=function(){this.facade.registerProxy(new g)},e}(puremvc.SimpleCommand);var U=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),L=PIXI.Text,K=PIXI.Container,z=PIXI.Graphics;const V=function(t){function e(e){var o=t.call(this,e)||this;return o._text=null,o._loading=null,o}return U(e,t),e.prototype.init=function(){var t=new z;t.beginFill(3308539),t.drawRect(0,0,this.stageWidth,this.stageHeight),t.endFill(),t.x=0,t.y=0,this.addChild(t);var e=new K;this.addChild(e),e.x=(this.stageWidth-300)/2,e.y=this.stageHeight-300;var o=new z;o.lineStyle(2,16777215,1),o.beginFill(3308539,0),o.drawRoundedRect(0,0,300,16,8),o.endFill(),e.addChild(o);var n=new PIXI.filters.GlowFilter({distance:16,outerStrength:2,innerStrength:0,color:16777215,quality:.1,knockout:!1});o.filters=[n];var r=new z;r.beginFill(16777215,1),r.drawRect(0,0,300,16),r.endFill(),e.addChild(r),r.x=-300,r.y=0;var i=new z;i.beginFill(16711680,1),i.drawRoundedRect(0,0,300,16,8),i.endFill(),e.addChild(i),r.mask=i,this._loading=r;var a=new L("加载中...",{fill:"#FFFFFF"});e.addChild(a),a.anchor.set(.5,.5),a.x=150,a.y=-30,this._text=a,this.emit("init_complete")},e.prototype.setProgress=function(t){window.TweenMax.to(this._loading,.3,{x:t/100*300-300}),this._text.text="".concat(parseInt(t),"%")},e.NAME="loading_scene",e}(a);var B=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const q=function(t){function e(){return t.call(this)||this}return B(e,t),e.prototype.execute=function(t){var e=t.getBody(),o=new V(e);this.facade.registerMediator(new r(o));var n=new h(e);this.facade.registerMediator(new _(n));var i=new E(e);this.facade.registerMediator(new N(i));var a=new R(e);this.facade.registerMediator(new k(a))},e}(puremvc.SimpleCommand);var J=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const Q=function(t){function e(){return t.call(this)||this}return J(e,t),e.prototype.execute=function(){this.facade.registerCommand(X.TO_LOADING,X),this.facade.registerCommand(X.TO_START,X),this.facade.registerCommand(X.TO_GAME,X),this.facade.registerCommand(X.TO_END,X),this.facade.registerCommand(P.GAME_START,P),this.facade.registerCommand(P.GAME_OVER,P),this.facade.registerCommand(P.CHECK,P),this.facade.registerCommand(P.ADD_FRUIT_STACK,P)},e}(puremvc.SimpleCommand);var Y=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const Z=function(t){function e(){return t.call(this)||this}return Y(e,t),e.prototype.initializeMacroCommand=function(){this.addSubCommand(D),this.addSubCommand(q),this.addSubCommand(Q)},e}(puremvc.MacroCommand);var $=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),tt=puremvc.Facade;(function(t){function e(e){var o=t.call(this,e)||this;return o._game=null,o}return $(e,t),e.getInstance=function(t){return null==t?null:(null==tt.instanceMap[t]&&(tt.instanceMap[t]=new e(t)),tt.instanceMap[t])},e.prototype.initializeModel=function(){t.prototype.initializeModel.call(this)},e.prototype.initializeView=function(){t.prototype.initializeView.call(this)},e.prototype.initializeController=function(){t.prototype.initializeController.call(this),this.registerCommand(e.STARTUP,Z)},e.prototype.startup=function(){var t=document.documentElement.clientWidth||document.body.clientWidth,n=document.documentElement.clientHeight||document.body.clientHeight,r=n>t?n/t*640:t/n*640;this.game=new o({width:640,height:r,backgroundColor:1087931}),this.sendNotification(e.STARTUP,this.game),this.removeCommand(e.STARTUP),this.sendNotification(X.TO_LOADING,{from:null})},e.prototype.destory=function(){this.game&&(this.game.destroy(!0),this.game=null),window.TweenMax.killAll()},Object.defineProperty(e.prototype,"game",{get:function(){return this._game},set:function(t){this._game=t},enumerable:!1,configurable:!0}),e.STARTUP="startup",e.instance=null,e})(tt).getInstance(o.NAME).startup()})();