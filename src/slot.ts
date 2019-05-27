import * as PIXI from 'pixi.js';
import {Howl, Howler} from 'howler';

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
initReel(1);
addButton();

function initReel(sound) {
  for (let i=0; i<5; i++) {
    setTimeout(function() {
      for (let j=2; j>=0; j--) {
        let picId = Math.floor(Math.random()*6+1);
        let texture = PIXI.Texture.fromImage('img/symbol_'+picId+'.png');
        let symbol = new PIXI.Sprite(texture);
        symbol.anchor.x = 0;
        symbol.anchor.y = 0;
        symbol.position.x = startX + i * width;
        symbol.position.y = startY + j * height;
        symbol.scale.x = 1;
        symbol.scale.y = 1;
        var soundReel = new Howl({
          src: ['sounds/Reel_Stop_'+sound+'.mp3']
        });
        setTimeout(function() {
          reel.addChild(symbol);
          soundReel.play();
          symbols.push(symbol);
        }, (3-j)*220);
      }
    } , i*180);
  }
}

function hideReel() {
  for (let i=0; i<5; i++) {
    setTimeout(function() {
      for (let j=2; j>=0; j--) {
        setTimeout(function() {
          reel.removeChildAt(0);
        }, (3-j)*120);
      }
    } , i*100);
  }
}

function addButton() {
    var textureButton = PIXI.Texture.fromImage('img/btn_spin_normal.png');
    var textureButtonDown = PIXI.Texture.fromImage('img/btn_spin_pressed.png');
    var textureButtonOver = PIXI.Texture.fromImage('img/btn_spin_hover.png');
    var textureButtonDisabled = PIXI.Texture.fromImage('img/btn_spin_disabled.png');

    var button = new PIXI.Sprite(textureButton);
    button.anchor.set(0.5);
    button.x = 600;
    button.y = 810;
    button.interactive = true;
    button.buttonMode = true;

    var soundStart = new Howl({
      src: ['sounds/Start_Button.mp3']
    });

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
          soundStart.play();
          let soundId = Math.floor(Math.random()*4+1);
          button.interactive = false;
          setTimeout(function() {
            initReel(soundId);
          }, 660);
          setTimeout(function() {
            if (button.isOver) {
                button.texture = textureButtonOver;
            } else {
                button.texture = textureButton;
            }
            button.interactive = true;
          }, 2080);
      }

      function onButtonUp() {
          this.isdown = false;
          if (this.texture == textureButtonDisabled) {
              return;
          }
          if (this.isOver) {
              this.texture = textureButtonOver;
          } else {
              this.texture = textureButton;
          }
      }

      function onButtonOver() {
          this.isOver = true;
          if ((this.isdown)||(this.texture == textureButtonDisabled)) {
              return;
          }
          this.texture = textureButtonOver;
      }

      function onButtonOut() {
          this.isOver = false;
          if ((this.isdown)||(this.texture == textureButtonDisabled)) {
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
