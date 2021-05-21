class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    textSize(30)
    text("gamestart",120,100)
    Player.getPlayerInfo();
    if(allPlayers!==undefined){
      var display_positon = 130
      for(var plr in allPlayers){
       if(plr==="player"+player.index)
       fill("red")
       else
       fill("black")
       
      
      display_positon+=20
      textSize(15)
      text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_positon);

    }
  

  }
  if(keyIsDown(UP_ARROW)&&player.index!==null){
    player.distance+=50
    player.update();

  }

}


}