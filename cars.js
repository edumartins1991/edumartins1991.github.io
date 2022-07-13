//carPos
let xCar1 = 500;
let yCar1 = 40;

function drawCar() {
    image(car1, xCar1, yCar1, 50, 40);
}

function movCar() {
    xCar1 -= 3;
    if (xCar1 < -30) {
        xCar1 = 500;
    }
}