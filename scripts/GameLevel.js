import * as PIXI from 'pixi.js';
import FarBackground from './objects/FarBackground';
import MidBackgroundBack from './objects/MidBackgroundBack';
import MidBackgroundMid from './objects/MidBackgroundMid';
import MidBackgroundFront from './objects/MidBackgroundFront';
import FrontBackground from './objects/FrontBackground';
import Sidewalk from './objects/Sidewalk';
import IgMan from './objects/IgMan';
import Pie from './objects/Pie';
import Trashcan from './objects/Trashcan';
import Score from './objects/Score';

export default class GameLevel extends PIXI.Container{
	constructor(){
		super();

		this.FAR_BG = new FarBackground();
		this.MID_BG_BACK = new MidBackgroundBack();
		this.MID_BG_MID = new MidBackgroundMid();
		this.MID_BG_FRONT = new MidBackgroundFront();
		this.FRONT_BG = new FrontBackground();
		this.SCORE = new Score();
		this.SIDEWALK = new Sidewalk();
		this.PIE = new Pie();
		this.TRASHCAN = new Trashcan();
		this.IG = new IgMan();

		this.over = false;

		this.addChild(this.FAR_BG);
		this.addChild(this.MID_BG_BACK);
		this.addChild(this.MID_BG_MID);
		this.addChild(this.MID_BG_FRONT);
		this.addChild(this.FRONT_BG);
		this.addChild(this.SCORE);
		this.addChild(this.SIDEWALK);
		this.addChild(this.PIE);
		this.addChild(this.TRASHCAN);
		this.addChild(this.IG);
	}

	update(){
		//check for collisions
		this.IG.eats(this.PIE, this.SCORE);
		
		if(this.IG.crashes(this.TRASHCAN)){
			this.over = true;
			this.IG.reset();
			this.PIE.eaten();
			this.TRASHCAN.reset();
			this.SCORE.text = 0;
		}
	}

	get isOver(){
		return this.over;
	}

	set isOver(state){
		this.over = state;
	}

	get totalPoints(){
		return this.SCORE.total;
	}

	set totalPoints(points){
		this.SCORE.total = points;
	}

	get IgMan(){
		return this.IG;
	}
}