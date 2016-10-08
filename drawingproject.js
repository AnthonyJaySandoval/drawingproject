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
canvas.fillRect(895,17.5,30,45);

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
canvas.moveTo(920,125);
canvas.lineTo(970,55);
canvas.lineTo(830,55);
canvas.fill();

canvas.fillStyle = "#87CEEB";
canvas.fillRect(895,60,30,30);

canvas.fillStyle = "#87CEEB";
canvas.fillRect(850,225,100,225);

canvas.fillStyle = "#87CEEB";
canvas.fillRect(799,225,50,125);

canvas.fillStyle = "#87CEEB";
canvas.fillRect(951,225,125,50);

canvas.fillStyle = "blue";
canvas.fillRect(799,325,50,75);

canvas.fillStyle = "blue";
canvas.fillRect(1048,225,75,50);

canvas.beginPath();
canvas.fillStyle = "blue";
canvas.moveTo(900,520);
canvas.lineTo(950,450);
canvas.lineTo(850,450);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#87CEEB";
canvas.moveTo(900,520);
canvas.lineTo(849,520);
canvas.lineTo(850,450);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#87CEEB";
canvas.moveTo(900,520);
canvas.lineTo(950,450);
canvas.lineTo(950,520);
canvas.fill();

canvas.fillStyle = "black";
canvas.fillRect(895,190,45,1);

canvas.fillStyle = "#87CEEB";
canvas.fillRect(849,520,50,125);

canvas.fillStyle = "#87CEEB";
canvas.fillRect(900,520,50,125);

canvas.fillStyle = "blue";
canvas.fillRect(849,590,50,75);

canvas.fillStyle = "blue";
canvas.fillRect(900,590,50,75);

canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(1200,250,20,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(1300,250,20,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(1400,250,20,0,2*Math.PI,true);
canvas.fill();
