class Game {
    constructor(){

    }
getState(){
    var gameStateref=database.ref('gameState');
    gameStateref.on("value",function(data){
        gameState=data.val()
    });

}
upadteState(state){
    database.ref('/').update({
        gameState:state
    })
}
start(){
    if(gameState===0){
        player=new Player()
        player.getCount();
        form=new Form();
        form.display();
    }
}
play(){
Form.hide();
Player.getPlayerInfo();
if(allPlayers!==undefined){
var displayPos= 100;
for(var plr in allPlayers){
displayPos+=40;
text(allPlayers[plr].name+"="+allPlayers[plr].distance,0,diplayPos)
}
}
if(keyDown(UP_ARROW)){
player.distance+=10;
player.update();
}
}
}