import * as PIXI from 'pixi.js';

var renderer = PIXI.autoDetectRenderer(1220, 900, {backgroundColor: 0x1099bb});
document.body.appendChild(renderer.view);

const startX = 10;
const startY = 10;
const width = 240;
const height = 230;

var stage = new PIXI.Container();
var reel = new PIXI.Container();
stage.addChild(reel)

var myMask = new PIXI.Graphics();
myMask.beginFill();
myMask.drawRect(20, 20, 1200, 700);
myMask.endFill();
stage.addChild(myMask);
reel.mask = myMask;

initReel();

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
      reel.addChild(symbol);
      //animate();
    }
  }
}

animate();
function animate() {
    requestAnimationFrame(animate);
    //let symbol = reel.getChildAt(0);
    //symbol.y += 1;
    renderer.render(reel);
    //if (symbol.y>700) {symbol.y=10;}
}
