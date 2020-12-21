const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse
const MouseConstraint = Matter.MouseConstraint

var canvas, engine, world;


function setup() {
  canvas = createCanvas (windowWidth/2, windowHeight/1.5)
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse : canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  penduluml1 = new Pendulum(340,450,"red")
  penduluml2 = new Pendulum(400,450,"red")
  penduluml3 = new Pendulum(460,450,"red")
  

  sling1 = new Sling (penduluml1.body,{x : 340, y : 200} )
  sling2 = new Sling (penduluml2.body, {x : 400, y : 200})
  sling3 = new Sling (penduluml3.body, {x : 440, y : 200})
}

function draw() {
  background("black");  
  Engine.update(engine)
 
  penduluml1.display();
  penduluml2.display();
  penduluml3.display();
  sling1.display();
  sling2.display();
  sling3.display();
  
}

function mouseDragged() {
  Matter.Body.setPosition(penduluml1.body, {x : mouseX, y : mouseY})
 //Matter.Body.setPosition(penduluml2.body, {x : mouseX, y : mouseY})
}

