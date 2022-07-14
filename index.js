function setup() {
    createCanvas(500, 400);
    soundTrack.loop();
  }
  function draw() {
    background(freewayImg);
    drawActor();
    drawCar();
    movCar();
    movActor();
    redrawCar();
    carCowColDetec();
    points();
    screenScore();
  }
