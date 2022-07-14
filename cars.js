let xCars = [500, 500, 500, 500, 500, 500];
let yCars = [40, 96, 152, 208, 264, 320];
let spdCars = [4.1, 2.5, 1.5, 1, 0.5, 2.5];

function drawCar() {
    for (let i = 0; i < imgCars.length; i = i + 1) {
        image(imgCars[i], xCars[i], yCars[i], 50, 40);
    }
}

function movCar() {
    for (let i = 0; i < spdCars.length; i = i + 1) {
        xCars[i] -= spdCars[i];
    }
}

function redrawCar() {
    if (xCars[0] < -30) {
        xCars[0] = 500;
        spdCars[0] = spdCars[0] * 1.1;
        if (spdCars[0] > 7){
            spdCars[0] = 7;
        }
        console.log(spdCars[0]);
    }
    if (xCars[1] < -30) {
        xCars[1] = 500;
        spdCars[1] = spdCars[1] * 1.02;
        if (spdCars[1] > 7){
            spdCars[1] = 7;
        }
    }
    if (xCars[2] < -30) {
        xCars[2] = 500;
        spdCars[2] = spdCars[2] * 1.01;
        if (spdCars[2] > 7){
            spdCars[2] = 7;
        }
    }
    if (xCars[3] < -30) {
        xCars[3] = 500;
        spdCars[3] = spdCars[3] * 1.06;
        if (spdCars[3] > 7){
            spdCars[3] = 7;
        }
    }
    if (xCars[4] < -30) {
        xCars[4] = 500;
        spdCars[4] = spdCars[4] * 1.05;
        if (spdCars[4] > 7){
            spdCars[4] = 7;
        }
    }
    if (xCars[5] < -30) {
        xCars[5] = 500;
        spdCars[5] = spdCars[5] * 1.02;
        if (spdCars[5] > 7){
            spdCars[5] = 7;
        }
    }
}
