var canvas=document.getElementById("gameCanvas");
var ctx=canvas.getContext("2d");
var score=0;
var interval;

function updateScore(){
document.getElementById("score").innerHTML=score;
}

function ballGame(){
clearInterval(interval);
score=0;
var x=200,y=200,dx=4,dy=4;

interval=setInterval(function(){
ctx.clearRect(0,0,400,400);
ctx.fillStyle="red";
ctx.beginPath();
ctx.arc(x,y,20,0,Math.PI*2);
ctx.fill();
x+=dx;y+=dy;
if(x<20||x>380) dx=-dx;
if(y<20||y>380) dy=-dy;
score++;
updateScore();
},20);
}

function clickGame(){
clearInterval(interval);
score=0;
canvas.onclick=function(){
score++;
updateScore();
}
}

function targetGame(){
clearInterval(interval);
score=0;
var tx=100,ty=100;

interval=setInterval(function(){
ctx.clearRect(0,0,400,400);
ctx.fillStyle="yellow";
ctx.beginPath();
ctx.arc(tx,ty,20,0,Math.PI*2);
ctx.fill();
},30);

canvas.onclick=function(e){
var rect=canvas.getBoundingClientRect();
var x=e.clientX-rect.left;
var y=e.clientY-rect.top;
var dist=Math.sqrt((x-tx)(x-tx)+(y-ty)(y-ty));
if(dist<20){
score++;
tx=Math.random()*360+20;
ty=Math.random()*360+20;
updateScore();
}
}
}
