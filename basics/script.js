function Player(nick){
    this.nickname = nick;
    this.playedMatch = 0;
}

Player.prototype.play = function(){
    this.playedMatch += 1;
    console.log(this.nickname + " had played " + this.playedMatch + " matches")
}

Player.prototype.getTierLvl = function(){
    if (this.playedMatch <= 3 ){
        return "A";
    }
    else if (this.playedMatch >= 3 && this.playedMatch <= 6){
        return "B";
    }
    else{
        return "C";
    }
}

function printTierLevel(nick, lvl){
    console.log(nick + " has " + lvl + "rank");
}


const player = new Player("evbabi");

player.play();
player.play();
player.play();
player.play();
console.log(player.getTierLvl());
console.log(player);