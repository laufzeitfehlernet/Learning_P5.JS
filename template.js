function setup() {
	createCanvas(600,600);
	noFill();
}

function segments (points) {
	beginShape();
	for (let point of points)
	  vertex(...point);
	endShape();
}

function draw () {
	background(240);
	let scaleFactor = width / 10;
	translate(width / 2, height /2);
	scale(scaleFactor,-scaleFactor);
	strokeWeight(1 / scaleFactor);
	
	segments([[0,3], [0,0], [2,0], [2,1], [1,1], [1,3], [0,3]]);
}
	 
