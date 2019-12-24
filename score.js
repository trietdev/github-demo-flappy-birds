var score = function(game){
	this.score = 0;
	this.game = game;

	this.update = function(){
		if(this.game.gameOver){
			return;
		}
		if(this.game.bird.birdX >= this.game.pipe.pipeX + this.game.pipe.pipeWidth && this.game.bird.birdX
		 <= this.game.pipe.pipeX + this.game.pipe.pipeWidth + 3){
			this.score++;
		}
	}

	this.draw = function(){
		this.game.context.font = "80px sans-serif";
		this.game.context.fillStyle = "white";
		this.game.context.fillText(this.score, (this.game.width-80)/2 , 120);
	}
}