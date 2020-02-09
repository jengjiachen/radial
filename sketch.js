let rotateBy = 5;
function setup() {
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES);
}

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    console.log(alt);
    noFill();
    
    stroke('#FF6BB3');
    strokeWeight(1);
    arc(200, 100, 180, 180, HALF_PI, PI + HALF_PI);
    arc(0+alt, 100+alt, 180, 180, PI + HALF_PI, HALF_PI);
    

}

function draw() {
    translate(300, 300);
    rotate(rotateBy); 
    makeArm(rotateBy);
    rotateBy += 6;
}

