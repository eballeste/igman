var background, sidewalk, igor, pie, trash,
    jumping, jumpDir, stage = new PIXI.Container();
    renderer = PIXI.autoDetectRenderer(960, 400);

// add canvas to body
document.body.appendChild(renderer.view);

// load assets, then call setup
var loader = PIXI.loader.add([
  'assets/background.jpg',
  'assets/sidewalk.jpg',
  'assets/igor.png',
  'assets/pie.png',
  'assets/trash.png'
]).load(setup);

// keyboard listener
window.addEventListener('keydown', function(e) {
  if (e.keyCode===32) {if (!jumping) triggerJump();}
});
// start jump sequence
function triggerJump() {
  jumping = true;
  jumpDir = 'up';
}
// jump event
function jump() {
  if (jumpDir==='up') {
    igor.y -= 5;
    if (igor.y===120) jumpDir = 'down';
  }

  if (jumpDir==='down') {
    igor.y += 5;
    if (igor.y===220) jumping = false;
  }
}

// helper functions
function createTilingSprite(assetPath, xPos, yPos) {
  var texture = PIXI.loader.resources[assetPath].texture;
  var tilingSprite = new PIXI.extras.TilingSprite(texture, texture.baseTexture.width, texture.baseTexture.height);
  tilingSprite.x = xPos;
  tilingSprite.y = yPos;
  stage.addChild(tilingSprite);
  return tilingSprite;
}

function createSprite(assetPath, xPos, yPos) {
  var texture = PIXI.loader.resources[assetPath].texture;
  var sprite = new PIXI.Sprite(texture);
  sprite.x = xPos;
  sprite.y = yPos;
  stage.addChild(sprite);
  return sprite;
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function colliding(a, b) {
  var xDiff = a.position.x - b.position.x;
  if(xDiff > -a.width/2 && xDiff < a.width/2) {
    var yDiff = a.position.y - b.position.y;
    if(yDiff > -a.height/2 && yDiff < a.height/2)	{
  		return true;
    }
  }
}

// setup game scene
function setup() {
  background = createTilingSprite('assets/background.jpg', 0, -70);
  background.scale.set(0.6, 0.6);

  sidewalk = createTilingSprite('assets/sidewalk.jpg', 0, 370);
  sidewalk.scale.set(1, 0.07);

  igor = createSprite('assets/igor.png', 10, 220);
  igor.scale.set(0.8, 0.8);

  pie = createSprite('assets/pie.png', getRandomNum(1000, 2000), 60);
  trash = createSprite('assets/trash.png', getRandomNum(2000, 3000), 220);

  // start render loop
  gameLoop();
}

// game state update
function play() {
  background.tilePosition.x -= 1;
  sidewalk.tilePosition.x -= 7;

  pie.x -= 6;
  trash.x -=7;

  if (pie.x < -200) pie.x = getRandomNum(1000, 2000);
  if (trash.x < -200) trash.x = getRandomNum(2000, 3000);

  if (jumping) jump();

  if (colliding(igor, pie)) {
    pie.x = getRandomNum(1000, 2000);
  }
}

// rendering loop
function gameLoop() {
  requestAnimationFrame(gameLoop);
  play();
  renderer.render(stage);
}
