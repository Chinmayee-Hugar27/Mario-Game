img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas');

	initializeInSetup(mario);

	video = createCanvas(VIDEO);
	video.size(800, 400);
	video.parent('game_console');
}

function draw() {
	game()

	background("#D3D3D3");
	if(noseX < 300)
	{
		marioX = marioX - 1;
	}
	
	if(nose > 300)
	{
		marioX = marioX + 1;
	}
	
	if(noseY < 150)
	{
		marioY = marioY - 1;
	}

	if(noseY > 150)
	{
		marioY = mario + 1;
	}
	image(img,marioX,marioY, 40, 70);
}

function modelLoaded() {
	console.log('Model Loaded!');
}

function gotPoses(results)
{
	if(results.length > 0)
	{
		console.log(results)
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}






