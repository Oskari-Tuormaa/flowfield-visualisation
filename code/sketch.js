var ff;
var particles;

function setup() {
	createCanvas(windowWidth, windowHeight);

	ff = new FlowField(5);

	particles = [];

	for (var i = 0; i < 4000; i++) {
		var xPos = random(0, width);
		var yPos = random(0, height);
		var newPart = new Particle(1, xPos, yPos, 0, 0);
		newPart.wrapAround = true;
		newPart.radius = 1;
		particles.push(newPart);
	}
	background(0);
}

function draw() {
	//background(0);

	//ff.tick();
	//ff.show();

	for (var _ = 0; _ < 1; _++) {
		for (var i = 0; i < particles.length; i++) {
			var p = particles[i];
			p.addForce(ff.getAt(p.pos.x, p.pos.y));
			p.show();
			p.tick();
		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}