!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=PIXI},function(e,t,n){"use strict";n.r(t);var r=n(0),o=r.autoDetectRenderer(1220,900,{backgroundColor:12054008});document.body.appendChild(o.view);const i=10,u=10,s=240,a=230;var d=new r.Container,c=new r.Container;d.addChild(c);var f=new r.Graphics;f.beginFill(),f.drawRect(20,20,1200,700),f.endFill(),d.addChild(f),c.mask=f;var l=[];function p(){for(let e=0;e<5;e++)for(let t=0;t<3;t++){let n=Math.floor(6*Math.random()+1),o=r.Texture.fromImage("img/symbol_"+n+".png"),d=new r.Sprite(o);d.anchor.x=0,d.anchor.y=0,d.position.x=i+e*s,d.position.y=u+t*a,d.scale.x=1,d.scale.y=1,setTimeout(function(){c.addChild(d),l.push(d)},20*(3*e+t))}}p(),function(){var e=r.Texture.fromImage("img/btn_spin_normal.png"),t=r.Texture.fromImage("img/btn_spin_pressed.png"),n=r.Texture.fromImage("img/btn_spin_hover.png"),o=r.Texture.fromImage("img/btn_spin_disabled.png");const i=new r.Sprite(e);function u(){this.isdown=!1,this.isOver?this.texture=n:this.texture=e}i.anchor.set(.5),i.x=600,i.y=810,i.interactive=!0,i.buttonMode=!0,i.on("pointerdown",function(){this.isdown=!0,this.texture=t,this.alpha=1,function(){for(;0!=c.children.length;)c.removeChildAt(0)}(),this.texture=o,setTimeout(function(){p(),this.texture=e},500)}).on("pointerup",u).on("pointerupoutside",u).on("pointerover",function(){if(this.isOver=!0,this.isdown)return;this.texture=n}).on("pointerout",function(){if(this.isOver=!1,this.isdown)return;this.texture=e}),d.addChild(i)}(),function e(){requestAnimationFrame(e);o.render(d)}()}]);