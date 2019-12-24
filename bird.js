var bird = function(game){
	this.game = game;

	this.birdWidth = 54;
	this.birdHeight = 40;
	this.birdX = 180;
	this.birdY = (this.game.height - this.birdHeight)/2;
	this.rotate = 0;
	var self = this;
	//bird images
	this.birdArr = [];
	this.bird = null;

	var type = 1;

	//bird speed
	this.speedY = 0;
	this.acceleration = 0.7;

	this.init = function(){
		this.loadImage();
	}

	this.loadImage = function(){
		this.birdArr[0] = new Image();
		this.birdArr[0].src = "images/bird3.png";
		this.birdArr[1] = new Image();
		this.birdArr[1].src = "images/bird2.png";
		this.birdArr[2] = new Image();
		this.birdArr[2].src = "images/bird1.png";
	}

	this.update = function(){
		if(this.game.gameOver){
			this.speedY = 20;
			this.acceleration = 0;

		}else{
			type++;
			if(type <= 5){
				this.bird = this.birdArr[0];
			}else if(type <= 10){
				this.bird = this.birdArr[1];
			}else if(type <= 15){
				this.bird = this.birdArr[2];
			}else if(type <= 20){
				type = 1;
			}
		}
		
		if(this.birdY < this.game.height - this.birdHeight - 80){
			this.speedY += this.acceleration;
			this.birdY += this.speedY;
		}else{
			this.birdY = this.game.height - this.birdHeight - 80;
			this.game.gameOver = true;
		}
		this.checkHitPipe();
	}

	this.draw = function(){
		this.game.context.drawImage(this.bird, this.birdX, 
			this.birdY, this.birdWidth, this.birdHeight);
	}

	this.flap = function(){
		this.speedY = -11;
	}

	this.checkHitPipe = function(){
		if(
			(this.birdX + this.birdWidth > this.game.pipe.pipeX && this.birdY <= this.game.pipe.pipeY1Top + this.game.pipe.pipeHeight && this.birdX <= this.game.pipe.pipeX + this.game.pipe.pipeWidth)
			|| (this.birdX + this.birdWidth >= this.game.pipe.pipeX && this.birdY + this.birdHeight >= this.game.pipe.pipeY1 && this.birdX <= this.game.pipe.pipeX + this.game.pipe.pipeWidth)
			){
			this.game.gameOver = true;
	}
}
}