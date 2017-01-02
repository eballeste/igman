import * as PIXI from 'pixi.js';

export default class Score extends PIXI.Text{
	constructor(){
		super(0, {'font-family': 'sans-serif', 'font-size': '38px', fill: 'white'});

		this.position.set(910, 7);
		
		this.score = 0;
	}

	increased(){
		this.score += 1;
		this.text =  this.score;
	}

	reset(){
		this.score = 0;
		this.text = 0;
	}

	get total(){
		return this.score;
	}

	set total(points){
		this.score = points;
	}
}