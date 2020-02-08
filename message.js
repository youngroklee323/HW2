function setup() {
  createCanvas(400, 500);
}

function draw() {
  background(220);
  printK(10,10);
  printO(60,10);
  printR(140,10);
  printE(200,10);
  printA(250,10);


}

function printZ(x,y){
  line(x,y,x+40,y);
  line(x+40,y,x,y+100);
  line(x,y+100,x+40,y+100);
}
function printY(x,y){
  line(x,y,x+25,y+50);
  line(x+25,y+50,x+50,y);
  line(x+25,y+50,x+25,y+100);
}
function printX(x,y){
  line(x, y, x+50, y+100);
  line(x, y+100, x+50, y);
}
function printW(x, y) {
  line(x, y, x + 10, y + 100);
  line(x + 10, y + 100, x + 20, y);
  line(x + 20, y, x + 30, y + 100);
  line(x + 30, y + 100, x + 40, y);
}

function printV(x, y) {
  line(x, y, x + 25, y + 100);
  line(x + 25, y + 100, x + 50, y);
}

function printU(x, y) {
  line(x, y, x, y + 75);
  line(x + 40, y, x + 40, y + 75);
  noFill();
  arc(x + 20, y + 75, 40, 40, TWO_PI, PI);
}

function printT(x, y) {
  line(x, y, x + 50, y);
  line(x + 25, y, x + 25, y + 100);
}

function printS(x, y) {
  noFill();
  arc(x + 25, y + 25, 50, 50, HALF_PI, TWO_PI);
  arc(x + 25, y + 75, 50, 50, PI + HALF_PI, PI);
}

function printR(x, y) {
  noFill();
  arc(x, y + 25, 80, 50, PI + HALF_PI, HALF_PI);
  line(x, y, x, y + 100);
  line(x, y + 50, x + 40, y + 100);
}

function printQ(x, y) {
  noFill();
  ellipse(x + 25, y + 50, 50, 100);
  line(x + 25, y + 50, x + 50, y + 100);
}

function printP(x, y) {
  line(x, y, x, y+100);
  noFill();
  arc(x, y + 20, 60, 40, PI + HALF_PI, HALF_PI);
}

function printO(x, y) {
  noFill();
  ellipse(x + 40, y + 50, 60, 100);
}

function printN(x, y) {
  // line(0,0,0,100);
  // line(0,0,50,100);
  // line(50,100,50,0);
  line(x, y, x, y + 100);
  line(x, y, x + 50, y + 100)
  line(x + 50, y + 100, x + 50, y);
}

function printM(x, y) {
  // line(0,0,0,100);
  // line(0,0,25,100);
  // line(25,100,50,0);
  // line(50,0,50,100);

  line(x, y, x, y + 100);
  line(x, y, x + 25, y + 100);
  line(x + 25, y + 100, x + 50, y);
  line(x + 50, y, x + 50, y + 100);

}


function printL(x, y) {
  //Draw a L
  //line(150, 50, 150, 150);
  //line(150, 150, 190, 150);
  line(x, y, x, y + 100);
  line(x, y + 100, x + 40, y + 100);
}

function printK(x, y) {
  // line(0,0,0,100);
  // line(0,50,50,0);
  // line(0,50,50,100);
  line(x, y, x, y + 100);
  line(x, y + 50, x + 50, y);
  line(x, y + 50, x + 50, y + 100);
}

function printJ(x, y) {
  noFill();
  // line(20,0,20,80);
  // arc(10,80,20,20, TWO_PI,PI);
  line(x + 20, y, x + 20, y + 80);
  arc(x + 10, y + 80, 20, 20, TWO_PI, PI);
}


function printI(x, y) {
  line(x + 20, y, x + 20, y + 100);
  line(x + 10, y, x + 30, y);
  line(x + 10, y + 100, x + 30, y + 100);
}


function printH(x, y) {
  //draw an H
  //line(50, 50, 50, 150);
  //line(90, 50, 90, 150);
  //line(50, 100, 90, 100);

  line(x, y, x, y + 100);
  line(x + 40, y, x + 40, y + 100);
  line(x, y + 50, x + 40, y + 50);
}

function printG(x, y) {
  noFill();
  // arc(40, 50, 80, 100, TWO_PI, PI + HALF_PI);
  // line(40, 50, 80, 50);

  arc(x + 40, y + 50, 80, 100, TWO_PI , PI + HALF_PI+QUARTER_PI);
  line(x + 40, y + 50, x + 80, y + 50);
}


function printF(x, y) {
  // line(0, 0, 0, 100);
  // line(0, 0, 50, 0);
  // line(0, 50, 50, 50);
  line(x, y, x, y + 100);
  line(x, y, x + 50, y);
  line(x, y + 50, x + 50, y + 50);
}


function printE(x, y) {
  //Drawn an E
  //line(100, 50, 100, 150);
  //line(100, 50, 140, 50);
  //line(100, 150, 140, 150);
  //line(100, 100, 140, 100);

  line(x, y, x, y + 100);
  line(x, y, x + 40, y);
  line(x, y + 100, x + 40, y + 100)
  line(x, y + 50, x + 40, y + 50)
}

function printD(x, y) {
  noFill();
  // line(0,0,0,100);
  // arc(0, 50, 75, 100, PI + HALF_PI, HALF_PI);

  line(x, y, x, y + 100)
  arc(x, y + 50, 75,100, PI + HALF_PI, HALF_PI);
}


function printC(x, y) {
  noFill();
  // arc(50, 50, 85, 100, HALF_PI, PI + HALF_PI);
  arc(x + 50, y + 50,85,100, HALF_PI, PI + HALF_PI);
}

function printB(x, y) {
  //B
  // line(0, 0, 0, 100);
  // noFill();
  // arc(0, 25, 50, 50, PI + HALF_PI, HALF_PI);
  // arc(0, 75, 50, 50, PI + HALF_PI, HALF_PI);

  line(x, y, x, y + 100);
  noFill();
  arc(x, y + 25,50,50, PI + HALF_PI, HALF_PI);
  arc(x, y + 75,50,50, PI + HALF_PI, HALF_PI);

}


function printA(x, y) {
  //A
  // line(0, 100, 20, 0);
  // line(40, 100, 20, 0);
  // line(10, 50, 30, 50); 

  line(x, y+100, x + 20, y );
  line(x + 40, y+100, x + 20, y );
  line(x + 10, y + 50, x + 30, y + 50);
}
