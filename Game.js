class Game {
    constructor(){

    }
    getState(){
        var gameStateref = database.ref('gameState');
        gameStateref.on("value",function(data){
        gameState = data.val();
        })
    }
  update(state){
      database.ref('/').update({
          gameState:state
      })
  } 
  async start(){
      if(gameState == 0 ){
          form = new Form();
          form.display();
          player = new Player();
          var playerCountref = await database.ref('playerCount').once("value")
          if(playerCountref.exists()){
              playerCount = playerCountref.val();
              player.getCount();
          }
      }
  }
}