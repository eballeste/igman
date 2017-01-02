import * as PIXI from 'pixi.js';
import config  from './config';
import Game from './Game';
import GameLevel from './GameLevel';
import GameOver from './GameOver';

let LEVEL = new GameLevel();
let OVER = new GameOver();
let game = new Game(config, LEVEL, OVER);

game.stage.addChild(LEVEL);
game.stage.addChild(OVER);
game.start();