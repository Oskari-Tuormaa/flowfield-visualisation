var ff;
var particles;

function setup() {
	createCanvas(windowWidth, windowHeight);

	ff = new FlowField(10);

	particles = [];

	for (var i = 0; i < 5000; i++) {
		var xPos = random(0, width);
		var yPos = random(0, height);
		var newPart = new Particle(1, xPos, yPos, 0, 0);
		newPart.wrapAround = true;
		newPart.radius = 20;
		particles.push(newPart);
	}
}

function draw() {
	background(51);

	ff.tick();
	for (var _ = 0; _ < 1; _++) {
		//ff.show();

		for (var i = 0; i < particles.length; i++) {
			var p = particles[i];
			p.show();
			p.tick();
			p.addForce(ff.getAt(p.pos.x, p.pos.y));
		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}