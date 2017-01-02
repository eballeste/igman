import * as PIXI from 'pixi.js';
import PIE from '../../assets/pie.png';
import ToolBox from '../plugins/toolbox/ToolBox';


export default class Pie extends PIXI.Sprite{
  constructor(){
  	super(PIXI.Texture.fromImage(PIE));

    this.tools = new ToolBox();

  	this.position.set(this.tools.getRandomNum(1000, 2000), 250);
  }

  eaten(){
    this.position.x = this.tools.getRandomNum(1000, 2000);
  }

  update(delta){
  	this.position.x -= 15;

  	if (this.position.x < -200) { this.position.x = this.tools.getRandomNum(1000, 2000); }
  }
}