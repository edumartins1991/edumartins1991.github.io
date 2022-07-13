function setup() {
    createCanvas(500, 400);
  }
  function draw() {
    background(freewayImg);
    drawActor();
    drawCar();
    movCar();
    movActor();
  }
  function drawActor(){
    image(actor, xActor, yActor, 30, 30);
  }