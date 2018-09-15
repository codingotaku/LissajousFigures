function setup() {
	createCanvas(710, 710);
	background(52);
	colorMode(HSB);
	init();
}
let t = 1;
let dis=100;

function init(){
	t=1;
	colorMode(RGB);
	background(52);
	colorMode(HSB);
	noFill();
	strokeWeight(5);
}

function draw() {
	for (let a = 1; a <= 5; a++) {
		stroke(a*25, 100, 100); //Color! yey!!!
		for (let b = 1; b <= 5; b++) {
			//formula from https://en.wikipedia.org/wiki/Lissajous_curve
			let x = a * sin(t / a + PI / 2)
			let y = b * sin(t / b);
			
			let rowDist=a*dis;
			let colDist=b*dis;
			
			point(x * 10 + rowDist, y * 10 + colDist);
		}
	}

	if (t >= 130) {//Magic number :P
		init();
	}
	t += 0.1;
}