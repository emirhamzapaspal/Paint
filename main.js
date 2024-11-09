const canvas = document.getElementById("canvas");
const color = document.getElementById("color");
const slider = document.getElementById("slider");
let drawing = false;
let erasing = false;
let startdrawing = false;
let starterasing = false;

let ctx = canvas.getContext("2d");

function erase(){
    starterasing = true;
    startdrawing = false;
}
function draw(){
    starterasing = false;
    startdrawing = true;
}
canvas.addEventListener('mousedown', (event) => {
    if(startdrawing == true){
        drawing = true;
        erasing = false;
    }
    if(starterasing == true){
        erasing = true;
        drawing = false;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
});

canvas.addEventListener('mousemove', (event) => {
    if (drawing) {
        ctx.lineWidth = slider.value;
        ctx.strokeStyle = color.value;
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    }
    if(erasing){
        ctx.lineWidth = 50;
        ctx.strokeStyle = "lightgray";
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    }
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
    erasing = false;
});