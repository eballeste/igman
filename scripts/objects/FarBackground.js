import * as PIXI from 'pixi.js';
import FAR_BG from '../../assets/background.jpg';

export default class FarBackground extends PIXI.extras.TilingSprite{
  constructor(){
    super(PIXI.Texture.fromImage(FAR_BG), 1400, 900);

    this.scale.set(1, 0.6);
  	this.position.x = 0;
  	this.position.y = -40;
  }

  update(delta){
    this.tilePosition.x -= 4;
  }
}