class Form {
    constructor(){
    this.greeting=createElement('h1');
    this.input=createInput("Name");
    this.button=createButton("Submit");
    }
display(){
var title=createElement('h1');
title.html("Race");
title.position(200,100);

this.input.position(200,200);
this.button.position(200,230);

this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name=this.input.value();
    playerCount=playerCount+1;
    player.index=playerCount;
    player.update();
    player.updateCount(playerCount);
    this.greeting.html("Welcome"+player.name);
    this.greeting.position(200,150);
})

}
}
