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
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}

class Student extends Person{
    constructor(name, school){
        super(name);
        this.school = school;
    }
}

class Animal{
    constructor(name, sound){
        this.name = name;
        this.sound = sound;
        this.action = "resting"
    }

    getAction(){
        console.log("The " + this.name+ " is " + this.action + " while " + this.sound);
    }
}

class Bird extends Animal{
    constructor(name,sound){
        super(name, sound);
        this.action = "flying";
    }
}

class Mammal extends Animal{
    constructor(name,sound){
        super(name, sound);
        this.action = "standing";
    }
}


/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

const player = new Player("evbabi");

player.play();
player.play();
player.play();
console.log(player.getTierLvl());
console.log(player);
printTierLevel(player);

const student = new Student("Géza", "Hartyán");
console.log(student.name);
console.log(student.getName());
console.log(student.school);

const animal = new Bird("parrot", "chirping");
animal.getAction();
const animal2 = new Mammal("dog", "barking");
animal2.getAction();
const animal3 = new Animal("cat", "meowing");
animal3.getAction();


