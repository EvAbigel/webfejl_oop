function Player(nick){
    this.nickname = nick;
    this.playedMatch = 0;
}

Player.prototype.play = function(){
    this.playedMatch += 1;
    console.log(this.nickname + " played " + this.playedMatch + " matches")
}

