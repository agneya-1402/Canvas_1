var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// // Rectangles
// c.fillStyle="blue";
// // c.fillRect(x,y,width,height)
// c.fillRect(100,100,40,100);
// c.fillStyle="red";
// c.fillRect(190,150,10,150);
// c.fillStyle="green";
// c.fillRect(130,200,90,60);

// // Line
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,50);
// c.lineTo(500,80);
// c.lineTo(50,300);
// c.strokeStyle="black";
// c.stroke();

// // Circles
// c.beginPath();
// c.arc(300,100,80, 0, Math.PI * 2, false);
// // c.strokeStyle="red";
// // c.stroke();
// c.fillStyle="#FCBC05";
// c.fill();

// //Loops multiple elements
// for (var i = 0; i<100; i++)
// {
//     c.beginPath();
//     var x = Math.random() * window.innerWidth;
//     var y =  Math.random() * window.innerHeight;
//     var r = Math.random() * 30;
//     c.arc(x,y,r,0,Math.PI * 2, false);
//     c.strokeStyle='black';
//     c.stroke();
// }




// Animate Circles 
var radius = 50; //circle radius
var x = 200;
var y = 200;
var dy = 7; // y spped
var dx = 7; //x speed

function anim()
{
    requestAnimationFrame(anim);
    c.clearRect(0,0,innerWidth,innerHeight); //clearing canvas each frame

    c.beginPath();
    c.arc(x,y,radius, 0, Math.PI * 2, false);
    c.strokeStyle="black";
    c.stroke();
    c.fillStyle="#FCBC05";
    c.fill();

    if (x + radius >innerWidth || x - radius < 0 ){ dx = -dx } //bouncing 
    if (y + radius >innerHeight || y - radius < 0 ){ dy = -dy } //bouncing 

    x += dx; //speed
    y += dy;
}

anim();