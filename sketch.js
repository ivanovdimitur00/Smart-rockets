let lifeSpan = 250; // How long should each generation live
let lifeCounter = 0; // Timer for cycle of generation

let population; // Population

let target; // Target position

let bestTimeToGoal; // Fastest time to target

let obstacles = []; //an array list to keep track of all the obstacles!

function setup() {
  createCanvas(640, 480);

  bestTimeToGoal = lifeSpan;

  target = new Obstacle(width / 2 - 12, 24, 24, 24);

  // Create a population with a mutation rate, and population max
  let mutationRate = 0.01;
  population = new Population(mutationRate, 150);

  // Create the obstacle course
  obstacles = [];
  obstacles.push(new Obstacle(width / 2 - 75, height / 2, 150, 10));
}

function draw() {
  background(255);

  // Draw the start and target positions
  target.show();

  // If the generation hasn't ended yet
  if (lifeCounter < lifeSpan) {
    population.live(obstacles);
    if (population.targetReached() && lifeCounter < bestTimeToGoal) {
      bestTimeToGoal = lifeCounter;
    } else {
      lifeCounter++;
    }
    // Otherwise a new generation
  } else {
    lifeCounter = 0;
    population.fitness();
    population.selection();
    population.reproduction();
  }

   // Draw the obstacles
   for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].show();
  }

 // Display some info
 fill(0);
 noStroke();
 text("Generation #: " + population.generations, 10, 18);
 text("Cycles left: " + (lifeSpan - lifeCounter), 10, 36);
 text("Record cycles: " + bestTimeToGoal, 10, 54);
}

// Move the target if the mouse is pressed
// System will adapt to new target
function mousePressed() {
  target.position.x = mouseX;
  target.position.y = mouseY;
  bestTimeToGoal = lifeSpan;
}
