//actorPos
let xActor = 100;
let yActor = 366;

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