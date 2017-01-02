import * as PIXI from 'pixi.js';
import GAME_OVER from '../assets/game-over/game-over.png';
import RESTART from '../assets/game-over/restart.png';
import TOTAL from '../assets/game-over/total.png';
import PIE from '../assets/pie.png';
import FinalScore from './objects/FinalScore';

export default class GameOver extends PIXI.Container{
	constructor(){
		super();

	  this.gameOverText = new PIXI.Sprite(PIXI.Texture.fromImage(GAME_OVER));
	  this.gameOverText.position.set(392.5, 135);

	  this.total = new PIXI.Sprite(PIXI.Texture.fromImage(TOTAL));
	  this.total.position.set(372.5, 185);

	  this.gameOverPie = new PIXI.Sprite(PIXI.Texture.fromImage(PIE));
	  this.gameOverPie.position.set(495, 182);

	  this.restart = new PIXI.Sprite(PIXI.Texture.fromImage(RESTART));
	  this.restart.position.set(277.5, 235);

	  this.finalScore = new FinalScore();

		this.addChild(this.gameOverText);
		this.addChild(this.total);
		this.addChild(this.gameOverPie);
		this.addChild(this.restart);
		this.addChild(this.finalScore);

		this.animationSpeed = 1.2;
		this.frameTime = 1.2;
		this.visible = false;

		this.overState = false;

		//ig jump event handler
    let self = this;
	}

	update(delta){
		this.frameTime -= delta;

		if (this.frameTime <= 0.6) {
			this.restart.visible = false;
		}

		if(this.frameTime <= 0){
			this.restart.visible = true;
			this.frameTime = this.animationSpeed;
		}
	}

	set totalPoints(points){
		this.finalScore.total = points;
	}

	get restarted(){
		return this.overState;
	}

	set restarted(state){
		this.overState = state;
	}
}