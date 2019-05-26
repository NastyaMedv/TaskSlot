import * as PIXI from 'pixi.js';

var renderer = PIXI.autoDetectRenderer(1200, 900, {backgroundColor: 0x1099bb});
document.body.appendChild(renderer.view);

const startX = 100;
const startY = 10;

var stage = new PIXI.Container();
var texture = PIXI.Texture.fromImage('img/symbol_2.png');
var symbol = new PIXI.Sprite(texture);

symbol.anchor.x = 0;
symbol.anchor.y = 0;
symbol.position.x = startX;
symbol.position.y = startY;
symbol.scale.x = 1;
symbol.scale.y = 1;
stage.addChild(symbol);
animate();

function animate() {
    requestAnimationFrame(animate);
    var symbol = stage.getChildAt(0);
    symbol.y += 3;
    renderer.render(stage);
    if (symbol.y>600) {symbol.y=100;}
}
