var fixedRect,movingRect

function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 100, 50);
 fixedRect.shapeColor="yellow"
 fixedRect.debug=true;

 movingRect= createSprite(100,100,50,100);
 movingRect.shapeColor="blue"
 movingRect.debug=true;

 


 
}

function draw() {
  background("lightblue");  
console.log(movingRect.x-fixedRect.x)

if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2
  && fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2&&
  movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2 && 
  fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2){
  fixedRect.shapeColor="pink"
  movingRect.shapeColor="pink"
}
else{
  fixedRect.shapeColor="yellow"
  movingRect.shapeColor="blue"
}
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  drawSprites();
}

