var distance = 0;
var database;
var new_screen, hotel, game,ngo;

function preload()
{
  flag = loadImage("flag.jpg");
}
function setup(){
  createCanvas(400,600);
  database = firebase.database();
  game = new Game();
  game.getState();
  new_screen = new Screens();  
  hotel = new Hotel();
  ngo = new Ngo();
}


function draw()
{
    background(flag);
    new_screen.screen1();
}