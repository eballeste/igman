import * as PIXI from 'pixi.js';
import TRASHCAN from '../../assets/trash.png';
import ToolBox from '../plugins/toolbox/ToolBox';


export default class Trashcan extends PIXI.Sprite{
  constructor(){
  	super(PIXI.Texture.fromImage(TRASHCAN));

    this.tools = new ToolBox();

  	this.position.set(this.tools.getRandomNum(2000, 3000), 305);
  }

  reset(){
  	this.position.x = this.tools.getRandomNum(2000, 3000);
  }

  update(delta){
  	this.position.x -= 15;

  	if (this.position.x < -200) { this.position.x = this.tools.getRandomNum(1000, 2000); }
  }
}