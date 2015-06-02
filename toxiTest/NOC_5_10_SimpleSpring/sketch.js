// Alex Norton
// a^N 
// http://alexnortn.com

// Reference to physics world
var physics;

var p1;
var p2;
var w,h;
var aVerts = [];
var aCounterVerts = [];

// This will be our JSON object for the phys sim
var vertices; 

function preload() {
  vertices = loadJSON("../data/a.json");
}

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);

  // Initialize the physics
  physics=new VerletPhysics2D();
  physics.addBehavior(new GravityBehavior(new Vec2D(0,0.5)));

  // Set the world's bounding box
  physics.setWorldBounds(new Rect(0,0,width,height));
  
  // Make two particles
  p1 = new Particle(new Vec2D(width/2,height/3));
  p2 = new Particle(new Vec2D(width/2+160,20));
  // Lock one in place
  p1.lock();

  // Make a spring connecting both Particles
  var spring=new VerletSpring2D(p1,p2,160,0.0005);

  // Anything we make, we have to add into the physics world
  physics.addParticle(p1);
  physics.addParticle(p2);
  physics.addSpring(spring);

  // Load the arrays
  loadArrays(vertices);
  // Draw the Bezier Shape (call)
  drawBezier(vertices);

  w = windowWidth;
  h = windowHeight;

}

function draw() {

  // Update the physics world
  physics.update();

  background(51);

  push();
  translate(w/2,h/2);
  drawBasicA(vertices);
  pop();

  // Draw a line between the particles
  stroke(200);
  strokeWeight(2);
  line(p1.x,p1.y,p2.x,p2.y);

  // Display the particles
  p1.display();
  p2.display();

  // Move the second one according to the mouse
  if (mouseIsPressed) {
    p2.lock();
    p2.x = mouseX;
    p2.y = mouseY;
    p2.unlock();
  } 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // Call setup to reinstantiate the window on resize
  setup();
  console.log("Window Resized!");
}

function drawBezier(vertices) {

  beginShape();
  for (var i = 0; i < vertices.a_vertex.length; i++) {
    if(vertices.a_vertex[i].vertexType == true) {
      bezierVertex(
        vertices.a_vertex[i].x, vertices.a_vertex[i].y,
        vertices.a_vertex[i++].x, vertices.a_vertex[i].y,
        vertices.a_vertex[i++].x, vertices.a_vertex[i].y
        );
    } else {
        vertex(vertices.a_vertex[i].x, vertices.a_vertex[i].y);
    }
  }
  endShape(CLOSE);

}

function drawBasicA(vertices){
  beginShape();
    vertex(vertices.a_vertex[0].x, vertices.a_vertex[0].y);
    vertex(vertices.a_vertex[1].x, vertices.a_vertex[1].y);
    bezierVertex(vertices.a_vertex[2].x, vertices.a_vertex[2].y, vertices.a_vertex[3].x, vertices.a_vertex[3].y, vertices.a_vertex[4].x, vertices.a_vertex[4].y);
    bezierVertex(vertices.a_vertex[5].x, vertices.a_vertex[5].y, vertices.a_vertex[6].x, vertices.a_vertex[6].y, vertices.a_vertex[7].x, vertices.a_vertex[7].y);
    bezierVertex(vertices.a_vertex[8].x, vertices.a_vertex[8].y, vertices.a_vertex[9].x, vertices.a_vertex[9].y, vertices.a_vertex[10].x, vertices.a_vertex[10].y);
    bezierVertex(vertices.a_vertex[11].x, vertices.a_vertex[11].y, vertices.a_vertex[12].x, vertices.a_vertex[12].y, vertices.a_vertex[13].x, vertices.a_vertex[13].y);
    bezierVertex(vertices.a_vertex[14].x, vertices.a_vertex[14].y, vertices.a_vertex[15].x, vertices.a_vertex[15].y, vertices.a_vertex[16].x, vertices.a_vertex[16].y);
    bezierVertex(vertices.a_vertex[17].x, vertices.a_vertex[17].y, vertices.a_vertex[18].x, vertices.a_vertex[18].y, vertices.a_vertex[19].x, vertices.a_vertex[19].y);
    vertex(vertices.a_vertex[20].x, vertices.a_vertex[20].y);
    bezierVertex(vertices.a_vertex[21].x, vertices.a_vertex[21].y, vertices.a_vertex[22].x, vertices.a_vertex[22].y, vertices.a_vertex[23].x, vertices.a_vertex[23].y);
    bezierVertex(vertices.a_vertex[24].x, vertices.a_vertex[24].y, vertices.a_vertex[25].x, vertices.a_vertex[25].y, vertices.a_vertex[26].x, vertices.a_vertex[26].y);
    bezierVertex(vertices.a_vertex[27].x, vertices.a_vertex[27].y, vertices.a_vertex[28].x, vertices.a_vertex[28].y, vertices.a_vertex[29].x, vertices.a_vertex[29].y);
    bezierVertex(vertices.a_vertex[30].x, vertices.a_vertex[30].y, vertices.a_vertex[31].x, vertices.a_vertex[31].y, vertices.a_vertex[32].x, vertices.a_vertex[32].y);
    bezierVertex(vertices.a_vertex[33].x, vertices.a_vertex[33].y, vertices.a_vertex[34].x, vertices.a_vertex[34].y, vertices.a_vertex[35].x, vertices.a_vertex[35].y);
    bezierVertex(vertices.a_vertex[36].x, vertices.a_vertex[36].y, vertices.a_vertex[37].x, vertices.a_vertex[37].y, vertices.a_vertex[38].x, vertices.a_vertex[38].y);
    bezierVertex(vertices.a_vertex[39].x, vertices.a_vertex[39].y, vertices.a_vertex[40].x, vertices.a_vertex[40].y, vertices.a_vertex[41].x, vertices.a_vertex[41].y);
    bezierVertex(vertices.a_vertex[42].x, vertices.a_vertex[42].y, vertices.a_vertex[43].x, vertices.a_vertex[43].y, vertices.a_vertex[44].x, vertices.a_vertex[44].y);
    bezierVertex(vertices.a_vertex[45].x, vertices.a_vertex[45].y, vertices.a_vertex[46].x, vertices.a_vertex[46].y, vertices.a_vertex[47].x, vertices.a_vertex[47].y);
    vertex(vertices.a_vertex[48].x, vertices.a_vertex[48].y);
    bezierVertex(vertices.a_vertex[49].x, vertices.a_vertex[49].y, vertices.a_vertex[50].x, vertices.a_vertex[50].y, vertices.a_vertex[51].x, vertices.a_vertex[51].y);
    bezierVertex(vertices.a_vertex[52].x, vertices.a_vertex[52].y, vertices.a_vertex[53].x, vertices.a_vertex[53].y, vertices.a_vertex[54].x, vertices.a_vertex[54].y);
  endShape(CLOSE);
  fill(51);
  beginShape();
    vertex(vertices.counter_vertex[0].x, vertices.counter_vertex[0].y);
    vertex(vertices.counter_vertex[1].x, vertices.counter_vertex[1].y);
    bezierVertex(vertices.counter_vertex[2].x, vertices.counter_vertex[2].y, vertices.counter_vertex[3].x, vertices.counter_vertex[3].y, vertices.counter_vertex[4].x, vertices.counter_vertex[4].y);
    bezierVertex(vertices.counter_vertex[5].x, vertices.counter_vertex[5].y, vertices.counter_vertex[6].x, vertices.counter_vertex[6].y, vertices.counter_vertex[7].x, vertices.counter_vertex[7].y);
    bezierVertex(vertices.counter_vertex[8].x, vertices.counter_vertex[8].y, vertices.counter_vertex[9].x, vertices.counter_vertex[9].y, vertices.counter_vertex[10].x, vertices.counter_vertex[10].y);
    bezierVertex(vertices.counter_vertex[11].x, vertices.counter_vertex[11].y, vertices.counter_vertex[12].x, vertices.counter_vertex[12].y, vertices.counter_vertex[13].x, vertices.counter_vertex[13].y);
  endShape(CLOSE);
}

// Setup the dynamic arrays
function loadArrays(vertices) {
  for(var i in vertices.a_vertex) {
    aVerts.push(createVector(vertices.a_vertex[i].x, vertices.a_vertex[i].y));
    console.log(aVerts[i].x + " , " + aVerts[i].y);
  }
  for(var j in vertices.counter_vertex) {
    aCounterVerts.push(createVector(vertices.counter_vertex[j].x, vertices.counter_vertex[j].y));
    console.log(aCounterVerts[j].x + " , " + aCounterVerts[j].y);
  }
}



