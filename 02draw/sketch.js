let x=0;
let speed=3;
function setup() {
    createCanvas(400,200);
    }
    function draw() {
        background(100);//230,239,2
        frameRate(30);
        circle(innerWidth,x,40);
        x+=speed;
        if (x > whidth || x <0) {
            speed = - Speed
        }
    }
