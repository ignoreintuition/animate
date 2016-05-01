$(function(){
	var context = document.getElementById('myCanvas').getContext('2d');
	var ball = new animate.Ball(context, 70, 150, 10, "#555555");
	window.requestAnimationFrame(draw);
	function draw(){
		context.clearRect(0,0,800,600); // clear canvas
		ball.draw();
		window.requestAnimationFrame(draw);
	}

});

