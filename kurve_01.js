let scaleFactor = 1;
const max = 5;
let k = 0;

function setup() {
	createCanvas(600,600);
	scaleFactor = width / max / 2;
	strokeWeight(1 / scaleFactor);
	noFill();
}

function segments (points) {
	beginShape();
	for (let point of points)
	  vertex(...point);
	endShape();
}

function drawCurve (f, a, b, n = 200) {
	segments([...Array(n+1).keys()].map(k => f(a + (b-a) * k/n)));
}

function draw () {
	k %= 1; //modulo 1 --> k = k % 1;
	background(240);
	
	translate(width / 2, height /2);
	scale(scaleFactor,-scaleFactor);
	stroke(200);
	line(-max, 0, max, 0);
	line(0, -max, 0, max);
	stroke(0);
	
	
	drawCurve(t => [3*sin(2*t)+1, 2*cos(3*t)+0],0 ,k*2*PI);
	k += 0.01;
}
	 
