class Player {
    constructor(){
this.name=null;
this.distance=0;
this.index=0;
    }
getCount(){
    var playerCountref=database.ref('playerCount');
    playerCountref.on("value",function(data){
        playerCount=data.val()
    });
}
updateCount(count){
database.ref('/').update({
    playerCount:count
})
}
update(){
    var playerIndex="player"+this.index;
    database.ref(playerIndex).set({
Name:this.name,
Distance:this.distance
    })
}
static getPlayerInfo(){
    var playerInfoRef=database.ref('player');
    playerInfoRef.on("value",(data)=>{
        allPlayers=data.val()
    });
}
}