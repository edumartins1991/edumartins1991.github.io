//actorPos
let xActor = 100;
let yActor = 366;
let collide = false;
let playerPoints = 0;

function drawActor() {
    image(actor, xActor, yActor, 30, 30);
}
function movActor() {
    if (keyIsDown(UP_ARROW)) {
        yActor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yActor += 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        xActor += 3;
    }
    if (keyIsDown(LEFT_ARROW)) {
        xActor -= 3;
    }
}

function carCowColDetec() {
    for (let i = 0; i < imgCars.length; i++) {
        collide = collideRectCircle(xCars[i], yCars[i], 50, 40, xActor, yActor, 11)
        if (collide) {
            xActor = 100;
            yActor = 366;
            loseGoalSound.play();
            playerPoints--;
            if (playerPoints < 0) {
                playerPoints = 0;
            }
        }
    }
}
function points() {
    if (yActor < 10) {
        addGoalSound.play();
        playerPoints++;
        yActor = 360;
    }
}
function screenScore() {
    textAlign();
    fill(color(255, 240, 60));
    textSize(25);
    text(playerPoints, width / 5, 26)
}