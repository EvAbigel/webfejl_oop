function fun(param){
    console.log(param.nev);
}

function funA(){
    console.log(this.nev);
}

//funB({nev: "funB"});

/*  így se működik, a hoisting azt eredményezi hogy nem az fut le amit meghítál

const funB = function (param){
    console.log(param.nev);
}
}*/

const funC = (param) =>{  //nem lehet konstruktor mert egy külső scope-ból szedi a this-t, nincsen saját this-e
    console.log(param.nev);
}

/////
class Objektum{
    nev = "Mariska"
}

const cucc2 = {
    nev: "Cirmi"
}
/////----------/////----------/////

const cucc = new Objektum();

fun(cucc);
fun(cucc2);
fun({nev: "IV. Béla"});

const alma = fun; //Hoisting + binding 
alma(cucc2);

const korte = funA.bind({nev: "körte"}) //bind -> this-re tesszük
korte();

fun.bind()

funC({nev: "C"});

const obj = {
    funA: (param) =>{console.log(param.nev);},
    funB: (param) =>{console.log(param.eletkor);}
}

obj.funA({nev: "Pisti", eletkor: "12"});
obj.funB({nev: "Pisti", eletkor: "12"});
