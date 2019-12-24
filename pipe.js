var pipe = function(game){
	this.game = game;

	this.distanceRight = 205;
	this.distanceTop = 150;
	this.pipeImg = null;
	this.pipeImg2 = null;
	this.pipeX = 800;
	this.pipeHeight = 700;
	this.pipeWidth = 80;
	//pipeY thuoc [280;470]
	this.pipeY1 = 200 + Math.random() * (470-200);
	this.pipeY2 = 200 + Math.random() * (470-200);
	this.pipeY1Top = this.pipeY1 - 	this.distanceTop - this.pipeHeight;
	this.pipeY2Top = this.pipeY2 - 	this.distanceTop - this.pipeHeight;

	//bird dead
	this.pipeY1
	
	this.init = function(){
		this.loadImage();
	}

	this.loadImage = function(){
		this.pipeImg = new Image();
		this.pipeImg.src = "images/pipe.png";
		this.pipeImg2 = new Image();
		this.pipeImg2.src = "images/pipe2.png";
	}
	//from 180 to 425
	this.update = function(){
		if(this.game.gameOver){
			return;
		}
		this.pipeX -= 4;
		if(this.pipeX <= -75){
			this.pipeY1 = this.pipeY2;
			this.pipeY2 = 200 + Math.random() * (470-200);
			this.pipeX =  this.pipeX + this.pipeWidth + this.distanceRight;
			this.pipeY1Top = this.pipeY1 - 	this.distanceTop - this.pipeHeight;
			this.pipeY2Top = this.pipeY2 - 	this.distanceTop - this.pipeHeight;
		}
	}

	this.draw = function(){
			//create first pipe
			this.game.context.drawImage(this.pipeImg, this.pipeX, this.pipeY1, 90, this.pipeHeight);
			this.game.context.drawImage(this.pipeImg2, this.pipeX, this.pipeY1Top, 90, this.pipeHeight);
			//create second pipe
			this.game.context.drawImage(this.pipeImg, this.pipeX + this.pipeWidth + this.distanceRight, this.pipeY2, 90, this.pipeHeight);
			this.game.context.drawImage(this.pipeImg2, this.pipeX + this.pipeWidth + this.distanceRight,this.pipeY2Top , 90, this.pipeHeight);
		}
	}