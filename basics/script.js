function Player(nick){
    this.nickname = nick;
    this.playedMatch = 0;
}

Player.prototype.play = function(){
    this.playedMatch += 1;
    console.log(this.nickname + " played " + this.playedMatch + " matches")
}

Player.prototype.getTierLvl = function(){
    if (Player.playedMatch <= 3 ){
        return "A";
    }
    else if (Player.playedMatch >= 3 && Player.playedMatch <= 6){
        return "B";
    }
    else{
        return "C";
    }
}

