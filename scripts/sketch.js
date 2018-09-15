let deltas=[];
function setup() {
	createCanvas(2000, 1250);
	background(52);
	colorMode(HSB);
  deltas.push(0);
  deltas.push(PI/4);
  deltas.push(PI/2);
  deltas.push((3*PI)/4);
  deltas.push(PI);
  deltas.push((5*PI)/4);
  deltas.push((3*PI)/2);
  deltas.push((7*PI)/4);
  deltas.push(PI*2);
	init();
}
let t = 1;

function init(){
	t=1;
	colorMode(RGB);
	background(52);
	colorMode(HSB);
	noFill();
	strokeWeight(3);
}

function draw() {
  //formula from https://en.wikipedia.org/wiki/Lissajous_curve
  
	for (let a = 1; a < 10; a++) {
    let rowDist=70;
		stroke(a*25, 100, 100); //Color! yey!!!
    
    let x = a * sin(t / a + deltas[a]);
    
		for (let b = 1; b <= 5; b++) {
      let newDist= rowDist*(a*3);
			let y = b * sin(t / b);
			
			let colDist=100*b*2;
			
			point(x * 10 + newDist, y * 10 + colDist);
		}
	}

  
	if (t >= 256) {//Magic number :P
		init();
	}
	t += 0.1;
}
