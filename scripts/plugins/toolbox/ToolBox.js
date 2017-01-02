export default class ToolBox {
  constructor(){}

  getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  isColliding(a, b) {
	  var xDiff = a.position.x - b.position.x;
	  if (xDiff > -a.width/2 && xDiff < a.width/2) {
	    var yDiff = a.position.y - b.position.y;
	    if (yDiff > -a.height/2 && yDiff < a.height/2) {
	      return true;
	    }
	  }

	  return false;
	}
}