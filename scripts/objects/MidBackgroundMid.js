import * as PIXI from 'pixi.js';
import MID_BG from '../../assets/background/bg-mid-mid.png';

export default class MidBackgroundMid extends PIXI.extras.TilingSprite{
  constructor(){
    super(PIXI.Texture.fromImage(MID_BG), 1920, 800);

  	this.position.set(0, 0);
  	this.scale.set(0.5, 0.5);
  }

  update(delta){
    this.tilePosition.x -= 0.8;
  }
}