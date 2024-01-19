var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//alle informatie 
var playerX = 50;
var playerY = 500;
var playerSpeedY = 0;
var gravity = 0.75;

var walls = [];
var wallWidth = 30;
var wallGap = 300;
var wallSpeed = 5;



function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // plaats de speler
  ctx.fillStyle = "blue";
  ctx.fillRect(playerX, playerY, 50, 50);

  // plaats de muren
  for (var i = 0; i < walls.length; i++) {
    ctx.fillStyle = "green";
    ctx.fillRect(walls[i].x, 0, wallWidth, walls[i].height); // bovenste deel van de muur
    ctx.fillRect(walls[i].x, walls[i].height + wallGap, wallWidth, canvas.height - walls[i].height - wallGap); // onderste deel van muur
  }

  update();

  requestAnimationFrame(draw);
}


function update() {
  // Update spelers positie
  playerSpeedY += gravity;
  playerY += playerSpeedY;

  // Check voor botsingen met de grond
  if (playerY > canvas.height - 50) {
    playerY = canvas.height - 50;
    playerSpeedY = 0;
  }

  // Update muur positie
  for (var i = 0; i < walls.length; i++) {
    walls[i].x -= wallSpeed;

    // Check of speler met muur bots
    if (
      playerX < walls[i].x + wallWidth &&
      playerX + 50 > walls[i].x &&
      (playerY < walls[i].height || playerY + 50 > walls[i].height + wallGap)
    ) {
      // als er een muur word aangeraakt krijg je dit bericht in beeld en is de game over
      alert("Game Over");
    }

    // verwijder de muren die niet meer op het scherm staan
    if (walls[i].x + wallWidth < 0) {
      walls.splice(i, 1);
      i--;
    }
  }

  // maak nieuwe muren
  if (Math.random()  < 0.0075) { //
    var wallHeight = Math.random() * (canvas.height - wallGap);
    walls.push({ x: canvas.width, height: wallHeight });
  }
}

canvas.addEventListener("click", function() {
  playerSpeedY = -12;
});

draw();