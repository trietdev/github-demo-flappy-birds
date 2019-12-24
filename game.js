var game = function(){
	this.canvas = null;
	this.context = null;
	this.width = 480;
	this.height = 630;

	var self = this;

	this.bird = null;
	this.bg = null;
	this.base = null;
	this.pipe = null;
	this.score = null;

	this.gameOver == null;

	this.init = function(){
		this.gameOver = false;
		this.canvas = document.createElement("canvas");
		this.context = this.canvas.getContext("2d");
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		document.body.appendChild(this.canvas);
		//create new bird
		this.bird = new bird(this);
		this.bird.init();

		//create new bg
		this.bg = new bg(this);
		this.bg.init();

		//create new base
		this.base = new base(this);
		this.base.init();

		//create new pipe
		this.pipe = new pipe(this);
		this.pipe.init();

		//create new score
		this.score = new score(this);

		this.mouseClick();

		this.loop();
	}

	this.loop = function(){
		self.update();
		self.draw();
		var myLoop = setTimeout(self.loop, 25);
	}

	this.update = function(){
		this.bg.update();
		this.pipe.update();
		this.bird.update();
		this.base.update();
		this.score.update();
	}

	this.draw = function(){
		this.bg.draw();
		this.pipe.draw();
		this.bird.draw();
		this.base.draw();
		this.score.draw();
	}

	this.mouseClick = function(){
		this.canvas.onclick = function(){
			self.bird.flap();
		}
	}
}

var play = new game();
play.init();