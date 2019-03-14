//a simple plotter for polar functions
function setup() {

    createCanvas(1000, 1000);
    
    background(80,80,80);
    stroke(255);
    strokeWeight(3);
    translate(width / 2, height / 2);
    line(-width / 2, 0, width / 2, 0);
    line(0, -width / 2, 0, width / 2);
    noFill();
    beginShape();

    for (var a = 0; a <= TWO_PI; a += 0.0001) {
    
        //polar function here
        let r = 1 + cos(a);
        
        //converting polar coordinates to cartesian coordinates
        x = 200 * r * cos(a);
        y = -200 * r * sin(a);
        vertex(x, y);
    }



    endShape(CLOSE);
}

function draw() {



}
