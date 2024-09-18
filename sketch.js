function setup() {
    createCanvas(400, 400, WEBGL);
  
    describe('A  green triangle spins around on a blue canvas.');
  }
  
  function draw() {
    background(200);
  
    // Rotate around the y-axis.
    rotateY(frameCount * 3.001);
  
    // Draw the triangle.
    triangle(-50, 25, 1, -60, 40, 50);
  }