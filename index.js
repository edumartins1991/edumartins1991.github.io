function setup() {
    createCanvas(500, 400);
  }
  function draw() {
    background(freewayImg);
    drawActor();
    drawCar();
    movCar();
    movActor();
    redrawCar();
    carCowColDetec()
  }
