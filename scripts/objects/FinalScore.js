import * as PIXI from 'pixi.js';

export default class FinalScore extends PIXI.Text{
	constructor(){
		super('', {'font-family': 'sans-serif', 'font-size': 38, fill: 0xffffff, 'text-align': 'center'});

		this.position.set(560, 190);
	}

	set total(points){
		this.text = points;
	}
}