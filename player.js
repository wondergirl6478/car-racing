class Player {
constructor (){

}
getCount(){
    var playerCountref = database.ref('playerCount')
    playerCountref.on("value",(data)=>{
        playerCount = data.val();
        
    })

}
  updateCount(count){
  database.ref('/').update({
      playerCount:count
  })
  }
  update(){
      var playerIndex = "player" + this.Index 
      database.ref(playerIndex).set({
      name:this.name    
      })
      
  }
  static getPlayerInfo(){
      var playerInforef = database.ref('players')
      playerInforef.on('value',(data)=>{
          allPlayers = data.val();
      })
  }
}
 