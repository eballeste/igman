import * as PIXI from 'pixi.js';
import config  from './config';
import Game from './Game';
import FarBackground from './objects/FarBackground';
import Sidewalk from './objects/Sidewalk';
import IgMan from './objects/IgMan';
import keyboard from './plugins/pixi-keyboard/index';

let game = new Game(config);

let FAR_BG = new FarBackground();
let SIDEWALK = new Sidewalk();
let IG = new IgMan();

//keyboard handlers
PIXI.keyboardManager.on('pressed', function(key){
  if(PIXI.keyboardManager.isPressed(PIXI.keyboard.Key.SPACE)){
  	IG.jump();
	}
});

game.stage.addChild(FAR_BG);
game.stage.addChild(SIDEWALK);
game.stage.addChild(IG);
game.start();