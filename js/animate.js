/* animate.js
* a small library for animating objects on the screen
* created by Brian Greig
* last updated 4/30/2016
*/

var animate = animate || {};

// base class for the circle ojbect
animate.circle = {
	context: null,
	x: 100,
	y: 100,
	radius: 50,
	color: "#000000"
};

// Ball inherits from circle.
// Inputs context, x position, y postion, radius, color
animate.Ball = function(ctx, x, y, r, c) {
	try{
		this.context = ctx;
		this.x = typeof x !== 'undefined' ?  x : this.x;
		this.y = typeof y !== 'undefined' ?  y : this.y;
		this.radius = typeof r !== 'undefined' ?  r : this.radius;
		this.color = typeof c !== 'undefined' ?  c : this.color;
		this.vx = 0;
		this.vy = 0;
		this.rotation = 0;
		this.speed = 0;
	}
	catch(e){

	}
};

animate.Ball.prototype = animate.circle;

// Ball's draw method uses checks the rotation and speed 
// to determine the current velocity, update the x and y coordinates
// and draw the circle
animate.Ball.prototype.draw = function(){
	try{
		var angle = this.rotation * Math.PI /180;
		var ax = Math.cos(angle) * this.speed;
		var ay = Math.sin(angle) * this.speed;

		this.vx += ax;
		this.vy += ay;

		this.x += this.vx;
		this.y += this.vy;
		
		this.context.beginPath();
		this.context.arc( this.x, this.y, this.radius, 0, 2*Math.PI, false );
		this.context.fillStyle = this.color;
		this.context.fill();
		this.context.lineWidth = 1;
		this.context.strokeStyle = '#000000';
		this.context.stroke();

	}
	catch(e){

	}
};

//Ball's accelerate method to increase speed
animate.Ball.prototype.accelerate = function(a){
	this.speed = a;
};

//Ball's rotate method rotates the ball in radians.
animate.Ball.prototype.rotate = function(vr){
	this.rotation += vr;
};
