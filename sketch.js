
//create a ball
var database;
var player;
var form;
var game;
var gameState = 0;
var playerCount;
var canvas;
function setup(){
canvas = createCanvas(400,400);
database = firebase.database();
game = new Game();
game.getState();
game.start();
}
function draw(){
   if(playerCount == 4) {
    game.update(1);
   }
   if(gameState == 1){
       clear();
   }
}