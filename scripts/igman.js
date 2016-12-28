import * as PIXI from 'pixi.js';
import IGOR from '../../assets/igor/igor.png';
import IGOR_MID from '../../assets/igor/igor-mid.png';
import IGOR_ALT from '../../assets/igor/igor-alt.png';
import IGOR_JUMP from '../../assets/igor/igor-jump.png';

export default class IgMan extends PIXI.Sprite{
  constructor(){
    super(PIXI.Texture.fromImage(IGOR));
    
    this.scale.set(0.8, 0.8);
  	this.position.x = 30;
  	this.position.y = 250;
  }

  update(delta){
    //this.rotation += 5*delta;
  }
}