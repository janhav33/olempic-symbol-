canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

colour = "red";

ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 3;
ctx.rect(159, 140, 500, 300);
ctx.stroke();


color="blue";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=7;
ctx.arc(265,210,40,0,2*Math.PI);
ctx.stroke();

color="black";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=7;
ctx.arc(330,210,40,0,2*Math.PI);
ctx.stroke();

color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=7;
ctx.arc(415,205,40,0,2*Math.PI);
ctx.stroke();

color="gold";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=7;
ctx.arc(290,270,40,0,2*Math.PI);
ctx.stroke();

color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=7;
ctx.arc(380,265,40,0,2*Math.PI);
ctx.stroke();