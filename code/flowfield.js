class FlowField {

	constructor(dens) {
		this.density = dens;
		this.vectors = [];
		this.time = 0;

		this.__init__();
	}

	// Initialize flowfield. Add vector map
	__init__() {
		for (var i = 0; i < windowWidth / this.density; i++) {
			this.vectors[i] = [];
			for (var j = 0; j < windowHeight / this.density; j++) {
				this.vectors[i][j] = createVector(0.1, 0);
				this.vectors[i][j].rotate(map(noise(i / 10.0, j / 10.0, this.time / 100.0), 0, 1, 0, 2 * PI));
			}
		}
	}

	// Draw flowfield as lines
	show() {
		for (var i = 0; i < this.vectors.length; i++) {
			for (var j = 0; j < this.vectors[i].length; j++) {
				push();
				translate(this.density * i, this.density * j);
				stroke(100);
				line(0, 0, this.vectors[i][j].x * 20, this.vectors[i][j].y * 20);
				pop();
			}
		}
	}

	// Return vector closest to location x, y
	getAt(x, y) {
		var i = floor((width + x) % width / this.density);
		var j = floor((height + y) % height / this.density);
		return this.vectors[i][j];
	}

	// Advance flowfield through time
	tick() {
		for (var i = 0; i < this.vectors.length; i++) {
			for (var j = 0; j < this.vectors[i].length; j++) {
				this.vectors[i][j] = createVector(0.1, 0);
				this.vectors[i][j].rotate(map(noise(i / 10.0, j / 10.0, this.time / 100.0), 0, 1, 0, 2 * PI));
			}
		}

		this.time++;
	}


}