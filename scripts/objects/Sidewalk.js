import * as PIXI from 'pixi.js';
import SIDEWALK from '../../assets/sidewalk.jpg';

export default class Sidewalk extends PIXI.extras.TilingSprite{
  constructor(){
    let texture = PIXI.Texture.fromImage(SIDEWALK);
    super(texture, 1200, 800);

    this.scale.set(1, 0.7);
  	this.position.set(0, 370);
  }

  update(delta){
    this.tilePosition.x -= 15;
  }
}