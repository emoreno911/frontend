function $D(obj){
	return document.getElementById(obj);
};

var canvas = $D("myCanvas");
var context = canvas.getContext("2d");

$D('btn-end').onclick = function(){
	clearSnake();
};

$D('btn-begin').onclick = function(){
	animateSnake();
};

document.onkeydown = function(e){
	var tecla = e.keyCode;
	switch(tecla){
		case 87:
			snake.direction = 'u';
			break;
		case 83:
			snake.direction = 'd';
			break;
		case 68:
			snake.direction = 'r';
			break;
		case 65:
			snake.direction = 'l';
			break;
		case 70:
			if(snake.fast >= 40)
				snake.fast -= 20;
			console.log('vel= '+ (1/snake.fast*1000).toFixed());
			break;
	}
	console.log(tecla);
}

function animateSnake(){
  clearSnake();
  drawSnake(snake);
  setTimeout(animateSnake, snake.fast);  
};

function clearSnake(){
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawSnake(s){
	context.lineWidth = 4;
	context.beginPath();
	context.moveTo(s.tailX, s.tailY);
	context.lineTo(s.headX, s.headY);
	context.stroke(s.kolor);
	advanceSnake(s.direction);
}

function advanceSnake(dir){
	switch(dir){
		case 'r':
			snake.headX++;
			snake.tailX++;
			break;
		case 'l':
			snake.headX--;
			snake.tailX--;
			break;
		case 'd':
			snake.headY++;
			snake.tailY++;
			break;
		case 'u':
			snake.headY--;
			snake.tailY--;
			break;	
	}
}

snake = {
  tailX: 146,
  tailY: 75,
  headX: 150,
  headY: 75,
  kolor: 'blue',
  direction: 'r',
  fast: 120
}