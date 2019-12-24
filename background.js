var bg = function(game){
	this.game = game;
	this.bgImage = null;
	this.bgX = 0;
	var self = this;

	this.init = function(){
		this.loadImage();
	}

	this.loadImage = function(){
		this.bgImage = new Image();
		this.bgImage.src = "images/background.png";
	}

	this.update = function(){
		if(this.game.gameOver){
			return;
		}
		this.bgX -= 2;
		if(this.bgX == -478){
			this.bgX = 0;
		}
	}

	this.draw = function(){
		this.game.context.drawImage(this.bgImage, this.bgX, 0, 480, 630 - 80);
		this.game.context.drawImage(this.bgImage, this.bgX + this.game.width - 2, 0, 480, 630 - 80);
	}
}