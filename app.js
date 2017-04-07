var opening, question, win, lose;
var value = 0;
var currentImage;
var startOver = 5000;
var clock;
var end = false;

function preload() {
  opening = loadImage("assets/opening.png");
  question = loadImage("assets/question.png");
  win = loadImage("assets/win.png");
  lose = loadImage("assets/lose.png");
}

function setup() { 
  createCanvas(1280, 720);
    opening.resize(1280, 720);
    question.resize(1280, 720);
    win.resize(1280, 720);
    lose.resize(1280, 720);
    currentImage = opening;
    image(currentImage, 0, 0);
    clock = millis ();
} 

function draw() { 
image(currentImage, 0, 0);
    
    if (end === true) {
        startOVER();
    }
}

function keyPressed () {
    clock = millis();
    if (value === 0) {
    currentImage = question; 
    value = value + 1
    }
    if (value === 1) {
        // A chosen
        if (keyCode === 65) {
            currentImage = win; 
            end = true;
         }
        // B chosen
        if (keyCode === 66) {
            currentImage = lose;
            end = true;
        } 
        // C chosen
        if (keyCode === 67) {
            currentImage = lose;
            end = true;
        }
    }   
}

function startOVER () {
     if (millis() - clock > startOver) {
        value = 0;
        currentImage = opening;
    }
}
