var base = function(game){
	this.game = game;
	this.baseImage = null;
	this.baseX = 0;
	var self = this;

	this.init = function(){
		this.loadImage();
	}

	this.loadImage = function(){
		this.baseImage = new Image();
		this.baseImage.src = "images/base.jpg";
	}

	this.update = function(){
		if(this.game.gameOver){
			return;
		}
		this.baseX -= 5;
		if(this.baseX == -480){
			this.baseX = 0;
		}
		if(this.game.gameOver == true){

		}
	}

	this.draw = function(){
		this.game.context.drawImage(this.baseImage, this.baseX, this.game.height - 80, 480, 80);
		this.game.context.drawImage(this.baseImage, this.baseX + this.game.width - 2, this.game.height - 80, 480, 80);
	}
}