/*function Player(nick){
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
}*/

class Player{
    constructor(nickname){
        this.nickname = nickname;
        this.playedMatch = 0;
    }

    play(){
        this.playedMatch++;
        console.log(this.nickname + " had played " + this.playedMatch + " matches");
    }

    getTierLvl(){
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
}

function printTierLevel(creature){
    console.log(creature.nickname + " has " + creature.getTierLvl() + " rank");
}

/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

const player = new Player("evbabi");

player.play();
player.play();
player.play();
console.log(player.getTierLvl());
console.log(player);
printTierLevel(player);