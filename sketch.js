/*
   # Created By : Mohamed Elshorbagy
   # 09 / 06 / 2017 
   # Snake Game

 */

var snake;
var gridScale = 15;
var food;
function setup() {
createP('Press with Mouse in Black Area');
createP('Play with Arrows (UP , DOWN . RIGHT , LEFT) , Enjoy It :D');

// Creat the Canvas

createCanvas(400 , 400);
snake = new Snake();
frameRate(15);
pickLocation();
 
}

function pickLocation() {
    // Initializing the Grid
    var Cols = floor(width/gridScale);
    var Raws = floor(height/gridScale);

    food = createVector(floor(random(Cols)) , floor(random(Raws)));
    food.mult(gridScale);

}

function keyPressed() {
  if(keyCode == UP_ARROW) {
      snake.direction(0,-1);

  } else if(keyCode == DOWN_ARROW) {
    snake.direction(0,1);

  } else if(keyCode == LEFT_ARROW) {
    snake.direction(-1,0);
    
  } else if(keyCode == RIGHT_ARROW) {
    snake.direction(1,0);
    
  }


}



function draw() {
background(51);
fill(255);
textSize(22);
text('Score : ' + snake.total , width /2 - 35 , 350);

snake.death();
snake.update();
snake.show();
snake.edges();
if(snake.eat(food)) {
   pickLocation();  
}

fill(231, 76, 60);
rect(food.x , food.y , 8, 8);


}







