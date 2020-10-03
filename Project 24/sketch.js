var wall1, wall_1, wall2, wall_2, wall3, wall_3;
var ground, ball;
var pressed = false;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
    createCanvas(1000, 700);
    rectMode(CENTER);




    engine = Engine.create();
    world = engine.world;
    ball = new Ball(70, 630, 20);

    //red walls
    /* wall1 = rect(290, groundSprite.y - groundSprite.height / 2 - 50, 20, 100);
     wall1.shapeColor = "red";
     wall_1 = Bodies.rectangle(290, groundSprite.y - groundSprite.height / 2 - 50, 20, 100, { isStatic: true });
     World.add(world, wall_1);

     wall2 = rect(400, groundSprite.y + groundSprite.height / 2 - 10, 200, 20);
     wall2.shapeColor = "red";
     wall_2 = Bodies.rectangle(400, groundSprite.y - groundSprite.height / 2 - 10, 200, 20, { isStatic: true });
     World.add(world, wall_2);

     wall3 = rect(510, groundSprite.y - groundSprite.height / 2 - 50, 20, 100);
     wall3.shapeColor = "red";
     wall_3 = Bodies.rectangle(510, groundSprite.y - groundSprite.height / 2 - 50, 20, 100, { isStatic: true });
     World.add(world, wall_3);*/

    wall_1 = Bodies.rectangle(800, 595, 20, 100, { isStatic: true });
    World.add(world, wall_1);

    wall_2 = Bodies.rectangle(860, 635, 100, 20, { isStatic: true });
    World.add(world, wall_2);

    wall_3 = Bodies.rectangle(920, 595, 20, 100, { isStatic: true });
    World.add(world, wall_3);


    //Create a Ground

    ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
    World.add(world, ground);


    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    background(0);
    Engine.update(engine);

    /*packageSprite.debug = true;
    wall1.debug = true;
    wall2.debug = true;
    wall3.debug = true;*/

    keyPressed();

    stroke("red");
    fill("red")
    rect(800, 595, 20, 100);
    rect(860, 635, 100, 20);
    rect(920, 595, 20, 100);

    stroke("brown");
    fill("brown");
    rect(width / 2, 650, width, 10);

    fill("white");
    strokeWeight(3);
    stroke("red");
    ellipseMode(RADIUS);
    ellipse(ball.body.position.x, ball.body.position.y, ball.radius);
}

function keyPressed() {
    if (keyCode === UP_ARROW && pressed === false) {
        Matter.Body.applyForce(ball.body, ball.body.position, { x: 60, y: -120 });
        pressed = true;
    }
}