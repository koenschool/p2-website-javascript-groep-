
//hoogte en breedte van het speelveld
let veld
let veldWidth = 500;
let veldHeight = 500;
let ctx



var spelerheight = 50;
var spelerwidth = 10;
var spelerspeedY = 0;

var speler1 = {
  x : 10,
  y : veldHeight/2,
  width : spelerwidth,
  height : spelerheight,
  speedY : spelerspeedY
}

var speler2 = {
  x : veldWidth - spelerwidth - 10,
  y : veldHeight/2,
  width : spelerwidth,
  height : spelerheight,
  speedY : spelerspeedY

}

var ballwidth = 10;
var ballheight = 10
var ball = {
  x : veldWidth/2,
  y : veldHeight/2,
  width : ballwidth,
  height : ballheight,
  speedX : 1,
  speedY : 2
}

var p1score = 0;
var p2score = 0;
//om het speelveld te maken
window.onload = function() {
  veld = document.getElementById("canvas");
  veld.height = veldHeight
  veld.width = veldWidth
  ctx = canvas.getContext("2d");

  

}



function update(){
  requestAnimationFrame(update);
  ctx.clearRect(0, 0, veldWidth, veldHeight);
  
  //teken speler 1
  ctx.fillStyle = "purple";
  var nextSpeler1y = speler1.y + speler1.speedY;
  if(!bordercollision(nextSpeler1y)) {
    speler1.y = nextSpeler1y;
  }
  ctx.fillRect(speler1.x, speler1.y,  spelerwidth, spelerheight);


  //teken speler 2
  var nextSpeler2y = speler2.y + speler2.speedY;
  if(!bordercollision(nextSpeler2y)) {
    speler2.y = nextSpeler2y;
  }
  ctx.fillRect(speler2.x, speler2.y, spelerwidth, spelerheight);

  //teken de bal
  ctx.fillStyle = "white"
  ball.x += ball.speedX;
  ball.y += ball.speedY;
  ctx.fillRect(ball.x, ball.y, ballwidth, ballheight)
//laat de bal bewegen
  if(ball.y <= 0 || (ball.y + ballheight >= veldHeight)){
    ball.speedY *= -1;
  }
// laat de bal terug stuiteren als de bal de speler raakt
  if (spelerCollision(ball, speler1, )) {
    if (ball.x <= speler1.x + speler1.width){
      ball.speedX *= -1
    }
  }
  else if (spelerCollision(ball, speler2)){
      if (ball.x + ballwidth >= speler2.x){
        ball.speedX *= -1
      }
  }

  //geeft de speler een punt als de ball langs de andere speler gaat
  if(ball.x < 0){
    p2score++;
    resetGame(1);
  }
  else if (ball.x + ballwidth > veldWidth){
    p1score++;
    resetGame(-1);
  }

  //score
  ctx.font = "45px sans-serif"
  ctx.fillText(p1score, veldWidth/5, 45);
  ctx.fillText(p2score, veldWidth*4/5 -45, 45 );

  if( p1score == 10 ) {
    

  
    p1score = 0
    
    
  }
 if(p2score == 10) {
    
    
    
    p2score = 0
  }

  


  
}
//zorgt ervoor dat je niet uit het speelveld kan
function bordercollision(yPosition) {
  return (yPosition < 0 || yPosition + spelerheight > veldHeight);
}





// keybinds toevoegen om het spel te besturen
document.addEventListener('keydown', function(e) {
  if(e.key === "w") {
    speler1.speedY = -3;
  }
  if(e.key === "s"){
  speler1.speedY = 3;
  }

  if(e.key === "ArrowUp"){
    speler2.speedY = -3;
  }

  if(e.key === "ArrowDown"){
    speler2.speedY = 3;
  }


});

function spelerCollision(a, b) {
  return a.x < b.x + b.width &&
         a.x + a.width > b.x &&
         a.y < b.y + b.height &&
         a.y + a.height > b.y;
}
function resetGame(directie){
  ball = {
    x : veldWidth/2,
    y : veldHeight/2,
    width : ballwidth,
    height : ballheight,
    speedX : directie,
    speedY : 2
  }
}

function startbtn() {
requestAnimationFrame(update);
update();

}