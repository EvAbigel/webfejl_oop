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

/*function Person(name){
    this.name = name;
}

Person.prototype.getName = function(){
    return this.name;
};

function Student(name, school){
    Person.call(this, name);
    this.school = school;
}

Object.setPrototypeOf(Student.prototype, Person.prototype);*/

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

