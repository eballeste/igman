import * as PIXI from 'pixi.js';
import IGOR from '../../assets/igor/igor.png';
import IGOR_MID from '../../assets/igor/igor-mid.png';
import IGOR_ALT from '../../assets/igor/igor-alt.png';
import IGOR_JUMP from '../../assets/igor/igor-jump.png';
import ToolBox from '../plugins/toolbox/ToolBox';


export default class IgMan extends PIXI.Sprite{
  constructor(){
  	super(PIXI.Texture.fromImage(IGOR));

    this.tools = new ToolBox();
  
    this.scale.set(0.8, 0.8);
  	this.position.set(30,250);

  	this.running = true;
  	this.animationSpeed = 0.3;
  	this.frametime = 0;
  	this.currentFrame = 0;

  	this.jumping = false;
  	this.jumpingUp = true;

  	//build array of pixi textures
  	this.states = [IGOR, IGOR_MID, IGOR_ALT, IGOR_MID];
  	this.states.map((state)=>{
  		return PIXI.Texture.fromImage(state);
  	});
  }

  jump(){
  	this.currentFrame = 4;
  	this.frametime = 0;
  	this.currentFrame = 0;
  	this.jumpingUp = true;
  	this.jumping = true;
  	this.texture = PIXI.Texture.fromImage(IGOR_JUMP);
  	this.running = false;
  }

  eats(food, points){
    if(this.tools.isColliding(this, food)){
      food.eaten();
      points.increased();
    }
  }

  crashes(object){
    if(this.tools.isColliding(this, object)){
      return true;
    }
    return false;
  }

  _processJump(){

  	if (this.jumpingUp) {
	    this.position.y -= 10;
	    if (this.position.y===100) { this.jumpingUp = false; }
	  }

	  if (!this.jumpingUp) {
	    this.position.y += 10;
	    if (this.position.y===150) { this.running = true; }
	    if (this.position.y===250) { this.jumping = false; }
	  }

  }

  reset(){
    this.running = true;
    this.animationSpeed = 0.3;
    this.frametime = 0;
    this.currentFrame = 0;

    this.jumping = false;
    this.jumpingUp = true;
    this.position.y = 250;
  }

  update(delta){

  	if(this.jumping){
			this._processJump();
  	}

  	if(this.running){

	    this.frametime -= delta;
	  	if (this.frametime <= 0) {
	    	this.currentFrame++;
		    if(this.currentFrame === 4){
		    	this.currentFrame = 0;
		    }
	    	this.texture = PIXI.Texture.fromFrame(this.states[this.currentFrame]);
	    	this.frametime = this.animationSpeed;
	    }

	  }
  }
}