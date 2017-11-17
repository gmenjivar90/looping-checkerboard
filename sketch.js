function setup() {
  createCanvas(500,400);
}

function draw() {
  background(100);
  fill(250);

  var x = 10;

  for (var i = 0; i < 12; i++) {
    rect(x, height/30, 40, 40);
    x += 40;
  } 
  
  var x = 10;
  
  for (var i = 0; i < 12; i++) {
    rect(x, height/8, 40, 40);
    x += 40;
  } 
  
  var x = 10;
  
  for (var i = 0; i < 12; i++) {
    rect(x, height/4.5, 40, 40);
    x += 40;
  }

  var x = 10;
  
  for (var i = 0; i < 12; i++) {
    rect(x, height/3.1, 40, 40);
    x += 40;
  } 
  
  var x = 10;
  
  for (var i = 0; i < 12; i++) {
    rect(x, height/2.4, 40, 40);
    x += 40;
  } 
  
  var x = 10;
  
  for (var i = 0; i < 12; i++) {
    rect(x, height/1.7, 40, 40);
    x += 40;
  } 
  
  var x = 10;
  
  for (var i = 0; i < 12; i++) {
    rect(x, height/2, 40, 40);
    x += 40;
  } 
}