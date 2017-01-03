import * as PIXI from 'pixi.js';
import FRONT_BG from '../../assets/background/bg-front.png';

export default class FrontBackground extends PIXI.extras.TilingSprite{
  constructor(){
    super(PIXI.Texture.fromImage(FRONT_BG), 1920, 800);

  	this.position.set(0, -30);
  	this.scale.set(0.5, 0.5);
  }

  update(delta){
    this.tilePosition.x -= 4;
  }
}