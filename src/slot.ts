import * as PIXI from 'pixi.js';

var renderer = PIXI.autoDetectRenderer(1220, 900, {backgroundColor: 0xB7EDF8});
document.body.appendChild(renderer.view);

const startX = 10;
const startY = 10;
const width = 240;
const height = 230;

var stage = new PIXI.Container();
var reel = new PIXI.Container();
stage.addChild(reel);

var myMask = new PIXI.Graphics();
myMask.beginFill();
myMask.drawRect(20, 20, 1200, 700);
myMask.endFill();
stage.addChild(myMask);
reel.mask = myMask;

var symbols = [];
initReel();
addButton();

function initReel() {
  for (let i=0; i<5; i++) {
    for (let j=0; j<3; j++) {
      let picId = Math.floor(Math.random()*6+1);
      let texture = PIXI.Texture.fromImage('img/symbol_'+picId+'.png');
      let symbol = new PIXI.Sprite(texture);
      symbol.anchor.x = 0;
      symbol.anchor.y = 0;
      symbol.position.x = startX + i * width;
      symbol.position.y = startY + j * height;
      symbol.scale.x = 1;
      symbol.scale.y = 1;
      //reel.addChild(symbol);
      let t = (i*3+j)*20;
      setTimeout(function() {
        reel.addChild(symbol);
        symbols.push(symbol);
      }, t);
      //symbols.push(symbol);
    }
  }
}

function hideReel() {
  while (reel.children.length !=0) {
      reel.removeChildAt(0);
  }
}

function addButton() {
    var textureButton = PIXI.Texture.fromImage('img/btn_spin_normal.png');
    var textureButtonDown = PIXI.Texture.fromImage('img/btn_spin_pressed.png');
    var textureButtonOver = PIXI.Texture.fromImage('img/btn_spin_hover.png');
    var textureButtonDisabled = PIXI.Texture.fromImage('img/btn_spin_disabled.png');

    const button = new PIXI.Sprite(textureButton);
    button.anchor.set(0.5);
    button.x = 600;
    button.y = 810;
    button.interactive = true;
    button.buttonMode = true;

    button
      .on('pointerdown', onButtonDown)
      .on('pointerup', onButtonUp)
      .on('pointerupoutside', onButtonUp)
      .on('pointerover', onButtonOver)
      .on('pointerout', onButtonOut);

      stage.addChild(button);

      function onButtonDown() {
          this.isdown = true;
          this.texture = textureButtonDown;
          this.alpha = 1;
          hideReel();
          this.texture = textureButtonDisabled;
          setTimeout(function() {
            initReel();
            this.texture = textureButton;
          }, 500);
      }

      function onButtonUp() {
          this.isdown = false;
          if (this.isOver) {
              this.texture = textureButtonOver;
          } else {
              this.texture = textureButton;
          }
      }

      function onButtonOver() {
          this.isOver = true;
          if (this.isdown) {
              return;
          }
          this.texture = textureButtonOver;
      }

      function onButtonOut() {
          this.isOver = false;
          if (this.isdown) {
              return;
          }
          this.texture = textureButton;
      }
}



animate();
function animate() {
    requestAnimationFrame(animate);
    renderer.render(stage);
}
