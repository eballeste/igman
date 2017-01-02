import * as PIXI from 'pixi.js';
import AnimationLoop from './plugins/pixi-animationloop/animationloop';
import keyboard from './plugins/pixi-keyboard/index';

export default class Game {
  constructor(config, level, over){
    this.level = level;
    this.over = over;

    const Renderer = (config.webgl) ? PIXI.autoDetectRenderer : PIXI.CanvasRenderer;
    this.renderer = new Renderer(config.width || 800, config.height || 600, config.rendererOptions);
    document.body.appendChild(this.renderer.view);

    this.gameState = this.play;

    this.animationLoop = new AnimationLoop(this.renderer);
    this.animationLoop.on('prerender', this.update.bind(this));
    this.animationLoop.on('postrender', this._updateManagers.bind(this));

    //keyboard event handler
    let self = this;
    PIXI.keyboardManager.on('pressed', function(key){
      if(PIXI.keyboardManager.isPressed(PIXI.keyboard.Key.SPACE)){
        if(self.gameState === self.play){
          self.level.IgMan.jump();
        }else{
          self.over.restarted = true;
        }
      }
    });
  }

  processSpaceBar(){
    console.log(this);
    
  }

  update(){
    if(this.level.isOver){
      this.over.totalPoints = this.level.totalPoints;
      this.over.visible = true;
      this.level.visible = false;
      this.level.isOver = false;

      this.gameState = this.gameOver;
    }

    if(this.over.restarted){
      this.level.totalPoints = 0;
      this.level.isOver = false;
      this.level.visible = true;
      this.over.visible = false;
      this.over.restarted = false;

      this.gameState = this.play;
    }

    this.gameState();  
  }

  play(){
    let playLevel = this.stage.children[this.stage.getChildIndex(this.level)];  

    this.level.update(this.animationLoop.delta);

    for(let i = 0; i < playLevel.children.length; i++){
      if(playLevel.children[i].update){
        playLevel.children[i].update(this.animationLoop.delta);
      }
    }
  }

  gameOver(){
    this.over.update(this.animationLoop.delta);
  }

  _updateManagers(){
    PIXI.keyboardManager.update();
  }

  start(){
    this.animationLoop.start();
  }

  get stage(){
    return this.animationLoop.stage;
  }
}