$(function(){
	var context = document.getElementById('myCanvas').getContext('2d');
	var ball = new animate.Ball(context, 70, 150, 10, "#555555");
	window.requestAnimationFrame(draw);
	function draw(){
		context.clearRect(0,0,800,600); // clear canvas
		ball.draw();
		window.requestAnimationFrame(draw);
		document.onkeydown = checkKey;
		document.onkeyup = function(){
			ball.accelerate(0.0);
		};

	}
	function checkKey(e) {
		e = e || window.event;
		if (e.keyCode == '38') {
			ball.accelerate(0.1);
		}
		else if (e.keyCode == '40') {
			ball.accelerate(-0.1);
		}
		else if (e.keyCode == '37') {
			ball.rotate(20);
		}
		else if (e.keyCode == '39') {
			ball.rotate(-20);
		}
	}
});


