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

class Person{
    constructor (){
        this.name = "Géza";
    }

    getName(){
        return this.name;
    }
}

class Student{
    constructor(school){
        this.name = "Géza";
        this.school = school;
    }
}

Object.setPrototypeOf(Student.prototype, Person.prototype);


/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

const player = new Player("evbabi");

player.play();
player.play();
player.play();
console.log(player.getTierLvl());
console.log(player);
printTierLevel(player);

const student = new Student("Hartyán")
console.log(student.name);
console.log(student.getName());