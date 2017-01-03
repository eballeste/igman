import * as PIXI from 'pixi.js';
import FAR_BG from '../../assets/background/bg-back.png';

export default class FarBackground extends PIXI.extras.TilingSprite{
  constructor(){
    super(PIXI.Texture.fromImage(FAR_BG), 1920, 800);

  	this.position.set(0, 0);
  	this.scale.set(0.5, 0.5);
  }

  update(delta){
    this.tilePosition.x -= 0.1;
  }
}