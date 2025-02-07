//függvény definiálás
const sum = (a, b) => {
 return a + b;
}

const theFunction = () =>{
    const tiz = 10;

    const result5 = obj.calculate3(2, 7, (a, b)=>{ //closure -> ahol definiálod a függvényt, abban a scope-ban eléri
        return a * tiz + b;
    })

    console.log(result5);
}

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
//objektum
const obj = {};

obj.calculate1 = sum;

//definiálás, itt azért működik minden mert a callback-et függvényként kezeljük egyből
obj.calculate2 = (callBack) => {
    const result = callBack(4, 5);
    return result;
}

obj.calculate3 = (a, b, callBack) => {
    return callBack(a, b);
}

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
//felhasználás
console.log(sum(4,5));
console.log(obj.calculate1(4,5));

//calculate2-be tesszük bele az arrow függvényt, amivel fog dolgozni a definiálásaor
const result1 = obj.calculate2((a, b) =>{
    return a + b;
});

console.log(result1);

//ctrl v, ctrl c csak most szorzás
const result2 = obj.calculate2((a, b) =>{
    return a * b;
});

console.log(result2);

const result3 = obj.calculate2((a, b) =>{
    return a - b;
});

console.log(result3);

const result4 = obj.calculate3(2,3,(a,b)=>{
    return a + b;
})

console.log(result4);

theFunction();



