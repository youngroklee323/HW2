function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  noStroke();
  strokeCap(SQUARE);
//rect red
  fill(255,0,0);
  rect(200,0,200,200);
  rect(0,300,100,100);
  
  //rect blue
  fill(0,0,255);
  rect(300,300,100,100);
  
  //rect yellow
  fill(255,255,0);
  rect(100,0,100,400);
  
  //stroke
  stroke(0);
  strokeWeight(10);
  line(105,0,105,400);
  line(205,0,205,400);
  line(0,305,400,305);
  line(200,200,400,200);
  line(300,300,300,400);
  
}
