class Obstacle {
    constructor(x, y, width, height) {
        this.position = createVector(x, y);
        this.width = width;
        this.height = height;
    }

    //this function checks if there is an object within the obstacle's boundaries
    contains(spot) {
        return (
            spot.x > this.position.x &&
            spot.x < this.position.x + this.width &&
            spot.y > this.position.y &&
            spot.y < this.position.y + this.height
        );
    }

    show() {
        stroke(0);
        fill(175);
        strokeWeight(2);
        rectMode(CORNER);
        rect(this.position.x, this.position.y, this.width, this.height);
      }
}