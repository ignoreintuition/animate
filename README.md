# animate

Animate.js is an object oriented library for adding animated shapes to HTML5 canvas.  This uses prototype interface to create shapes and add animation to them on HTML5 canvas.  Refer to main.js to see implementation.  

var ball = new animate.Ball(context, 70, 150, 10, "#555555");

ball.draw();

ball.accelerate(0.1);

ball.rotate(20);

