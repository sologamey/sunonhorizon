function setup() {
	createCanvas(windowWidth,windowHeight); // creates canvas to window size
	noCursor();
}
 
function draw() {
	fill(163,60,16); // Initial fill
	stroke(229,78,13); // Stroke color
	var hueValue = map(mouseY,0,height,255,150); // Color Value
	var hueValueHill = map(mouseY,0,height,100,255);
	var sunSize = map(mouseY,0,height,100,390);
	var upDown = mouseY; // Up or Down Value
	var leftRight = mouseX; // Left or Right Value
	background(255,hueValue,87); // Background color change
	fill(255,hueValue,63); // Sun color change
	ellipse(leftRight,upDown,sunSize,sunSize); // Sun shape
	fill(hueValueHill,196,31); // Hill color change
	noStroke(); // No stroke
	stroke(hueValueHill,255,107); // Different stroke color
	ellipse(0,windowHeight,1200,800); // Left Hill Shape
	ellipse(windowWidth/2,windowHeight,1500,600); // Back Bottom Hill Shape
	ellipse(windowWidth,windowHeight,1300,900); // Right Hill Shape
	ellipse(windowWidth/2,windowHeight,2000,300); // Front Bottom Hill Shape
}