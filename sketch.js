var bgImg;
var catImg1, catImg2, catImg3, catImg4;
var mouseImg1, mouseImg2, mouseImg3, mouseImg4;

function preload() {
    //load the images here
    bgImg = loadImage("images/ground.png");
    catImg1 = loadAnimation("images/cat1.png","images/cat4.png");
    mouseImg1 = loadAnimation("images/mouse1.png","images/mouse4.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse4.png");
   

}

function setup() {
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite (900,75);
    tom.addAnimation("stop",catImg1);
    tom.scale = 0.1;

}

function draw() {
    //Write condition here to evalute if tom and jerry collide
    background (bgImg);

    drawSprites();
}


function keyPressed() {
    if(keyCode === LEFT_ARROW){
        tom.addAnimation ("running", catImg2);
        tom.changeAnimation("running", catImg2);
    }
    //For moving and changing animation write code here
}