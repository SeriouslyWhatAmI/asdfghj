objectDetector= "";

img = "";
objects = [];
status = "";

function preload(){
  img = loadImage('dogcat.jpg');
}


function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded); 
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill('#FFFFFF')
    text("dog", 45, 75);
    noFill();
    stroke('#FFFFFF');
    rect(30, 60, 450, 350);
}