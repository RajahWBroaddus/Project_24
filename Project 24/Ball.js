class Ball {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;

        World.add(world, this.body);
    }
    display() {

        var angle = this.body.angle;
        var pos = this.body.position;
        /*push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("white");
        strokeWeight(3);
        stroke("red");
        ellipseMode(RADIUS);
        ellipse(ball.body.position.x, ball.body.position.y, ball.radius);
        pop();*/
    }
}