!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n){e.exports=PIXI},function(e,n,t){"use strict";t.r(n);var r=t(0),o=r.autoDetectRenderer(1220,900,{backgroundColor:1087931});document.body.appendChild(o.view);const i=10,u=10,a=240,l=230;var c=new r.Container,d=new r.Container;c.addChild(d);var f=new r.Graphics;f.beginFill(),f.drawRect(20,20,1200,700),f.endFill(),c.addChild(f),d.mask=f,function(){for(let e=0;e<5;e++)for(let n=0;n<3;n++){let t=Math.floor(6*Math.random()+1),o=r.Texture.fromImage("img/symbol_"+t+".png"),c=new r.Sprite(o);c.anchor.x=0,c.anchor.y=0,c.position.x=i+e*a,c.position.y=u+n*l,c.scale.x=1,c.scale.y=1,d.addChild(c)}}(),function e(){requestAnimationFrame(e);o.render(d)}()}]);