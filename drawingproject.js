var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

canvas.fillStyle = "black";
canvas.fillRect(0,0,1800,900);

canvas.beginPath();
canvas.fillStyle = "blue";
canvas.arc(900,125,100,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#FFDAB9";
canvas.arc(912,140,81,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#87CEEB";
canvas.arc(815,125,15,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "red";
canvas.arc(815,125,10,0,2*Math.PI,true);
canvas.fill();

canvas.fillStyle = "#87CEEB";
canvas.fillRect(879,20,35,35);

canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(950,140,25,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(885,140,25,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(895,140,12,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(960,140,12,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "blue";
canvas.moveTo(350,500);
canvas.lineTo(520,130);
canvas.lineTo(200,130);
canvas.fill();
