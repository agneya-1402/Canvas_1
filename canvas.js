var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// Rectangles
c.fillStyle="blue";
// c.fillRect(x,y,width,height)
c.fillRect(100,100,40,100);
c.fillStyle="red";
c.fillRect(190,150,10,150);
c.fillStyle="green";
c.fillRect(130,200,90,60);

// Line
c.beginPath();
c.moveTo(50,300);
c.lineTo(300,50);
c.lineTo(500,80);
c.lineTo(50,300);
c.strokeStyle="black";
c.stroke();

// Circles
c.beginPath();
c.arc(300,100,80, 0, Math.PI * 2, false);
c.strokeStyle="red";
c.stroke();
c.fillStyle="#FCBC05";
c.fill();