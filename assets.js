//imgs
let freewayImg;
let car1;
let car2;
let car3;
let car4;
let car5;
let car6;
let car7;
let actor;
//sounds
let soundTrack;
let addGoalSound;
let loseGoalSound;

function preload() {
    soundTrack = loadSound("/assets/sounds/soundtrack.mp3");
    addGoalSound = loadSound("/assets/sounds/points.wav");
    loseGoalSound = loadSound("/assets/sounds/colid.mp3");
    freewayImg = loadImage("/assets/imgs/freeway.png");
    car1 = loadImage("/assets/imgs/car1.png");
    car2 = loadImage("/assets/imgs/car2.png");
    car3 = loadImage("/assets/imgs/car3.png");
    car4 = loadImage("/assets/imgs/car2.png");
    car5 = loadImage("/assets/imgs/car3.png");
    car6 = loadImage("/assets/imgs/car1.png");
    imgCars = [car1, car2, car3, car4, car5, car6];
    actor = loadImage("/assets/imgs/actor-1.png");
}