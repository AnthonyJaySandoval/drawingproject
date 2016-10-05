var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

canvas.fillStyle = "black";
canvas.fillRect(0,0,1800,900);

canvas.beginPath();
canvas.fillStyle = "blue";
canvas.arc(900,125,100,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#FAEBD7";
canvas.arc(910,140,80,0,2*Math.PI,true);
canvas.fill();
