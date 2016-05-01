/* animate.js
* a small library for animating objects on the screen
* created by Brian Greig
* last updated 4/30/2016
*/

var animate = animate || {};
animate.circle = {
	context: null,
	x: 100,
	y: 100,
	radius: 50,
	color: "#000000"
};

animate.Ball = function(ctx, x, y, r, c) {
	try{
		this.context = ctx;
		this.x = typeof x !== 'undefined' ?  x : this.x;
		this.y = typeof y !== 'undefined' ?  y : this.y;
		this.radius = typeof r !== 'undefined' ?  r : this.radius;
		this.color = typeof c !== 'undefined' ?  c : this.color;
		this.vx = 10;
		this.vy = 10;
	}
	catch(e){

	}
};

animate.Ball.prototype = animate.circle;

animate.Ball.prototype.draw = function(){
	try{
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
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
	animate.Ball.prototype.accelerate = function(vx, vy){
		

	};
};