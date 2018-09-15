let t;
let deltas = [];

function setup() {
	createCanvas(1600, 800);
	background(52);
	colorMode(HSB);
	deltas.push(0);
	deltas.push(PI / 4);
	deltas.push(PI / 2);
	deltas.push((3 * PI) / 4);
	deltas.push(PI);
	deltas.push((5 * PI) / 4);
	deltas.push((3 * PI) / 2);
	deltas.push((7 * PI) / 4);
	deltas.push(PI * 2);
	init();
}

function init() {
	t = 1;
	colorMode(RGB);
	background(52);
	colorMode(HSB);
	noFill();
	strokeWeight(5);
}

function draw() {
	//formula from https://en.wikipedia.org/wiki/Lissajous_curve

	for (let a = 1; a < 9; a++) {
		let rowDist = 100;
		let x = a * sin(t / a + deltas[a]);
		stroke(a * 25, 100, 100); //Color! yey!!!
		for (let b = 1; b <= 5; b++) {

			let newDist = rowDist * (a * 1.75);
			let y = b * sin(t / b);
			let colDist = 50 * b * 2.5;

			point(x * 10 + newDist, y * 10 + colDist);
		}
	}


	if (t >= 256) { //Magic number :P
		init();
	}
	t += 0.1;
}
