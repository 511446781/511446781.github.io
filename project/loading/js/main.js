/** @type {HTMLCanvasElement} */
var canvas = document.querySelector("#canvas")
var ctx = canvas.getContext("2d")


let bar = 0;
let frames = 0;
let bolls = [];
let barColor = [randomNum(0, 255, true), randomNum(0, 255, true), randomNum(0, 255, true)]

function randomNum(m, n, int) {
    if (int) {
        return Math.floor(Math.random() * (n - m) + m);
    } else {
        return Math.random() * (n - m) + m;
    }
}
function randomColor() {
    return `rgba(${randomNum(50, 200, true)},${randomNum(50, 200, true)},${randomNum(50, 200, true)})`;
}

class Boll {
    constructor(...values) {
        [this.x, this.y, this.r, this.c] = values;
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r,0,2*Math.PI)
        ctx.closePath()
        ctx.fillStyle=this.c
        ctx.fill()
    }
    generateSpeed(m,n,int){
        this.sx = -randomNum(m, n, int) / 3;
        this.sy = -randomNum(m, n, int);
    }
    move(){
        this.x+=this.sx
        this.y+=this.sy
    }
    updateBoll() {
        this.sy += 0.1;
        this.r = this.r - 0.02;
        if (this.r <= 0) {
            this.r = 0;
        }
    }
}


let id = setInterval(() => {
    bar += 0.5;
    frames++;
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillStyle = "lightgray";
    ctx.fillRect(50, 45, 400, 10);
    ctx.fillStyle = "#dd77d8";
    ctx.fillRect(50, 45, bar, 10);

    if (frames %1 === 0) {
        let b = new Boll(bar + 50, 50, 2, randomColor());
        bolls.push(b);
        b.draw();
        // 初始化小球 速度
        b.generateSpeed(2, 4, false);
    }
    for (boll of bolls) {
        boll.move();
        boll.draw();
        boll.updateBoll();
    }
    if (bar >= 400) {
        bar=0
    }
}, 30)