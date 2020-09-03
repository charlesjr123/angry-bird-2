function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 400, 100, 100);
  fixed.shapeColor="green";
  fixed.debug=true;

  fixed1=createSprite(310, 260, 10, 70);
  fixed1.shapeColor="purple";
  fixed1.debug=true;

  moving=createSprite(400,200,50,50);
  moving.shapeColor="green";
  moving.debug=true;
  moving.velocityY = 5;
}


function draw() {
  background(180); 
  //moving.y=mouseY;
  //moving.x=mouseX; 
  //console.log(moving.width/2+fixed.width/2);
 // console.log(moving.x-fixed.x);
 if(isTouching(moving,fixed1)){
  fixed1.shapeColor='red';
  moving.shapeColor='red';
 }
 else {
  fixed1.shapeColor='green';
  moving.shapeColor='green';
 }
 bounceOff(moving,fixed);

  drawSprites();
  text(fixed.x-moving.x,20,20);
   text(moving.width/2+fixed.width/2,380,20);

}

