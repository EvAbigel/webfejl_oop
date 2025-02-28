const fv1 = (a, b) => {
    return a + b;
}

//higher order fv2, callback az a lower
const fv2 = (a, b, cb) => {
    const v1 = cb(a, 2);
    const v2 = cb(b, 4);
    const osszeg = cb(v1, v2);

    return osszeg;
}

//higher order function : van egy függvény bemeneti paramétere (callback) vagy egy függvénnyel tér vissza

const fv3 = (operator) => {
    //lower order function mert ez egy kisebb fuction
    if (operator == "-"){
        return (a,b) =>{
            return a - b;
        }
    }
    if (operator == "*2"){
        const multi = 2;
        return (a, b) => {
            return (a + b) * multi;
        }
    }
}



console.log(fv1(5, 7));

const res1 = fv2(5, 7, (a, b) => { return a + b; })

console.log(res1);

const res2 = fv2(5, 7, fv1);

console.log(res2)

const fv4 = fv3("-")
console.log(fv4(5,7));

const res3 = fv2(5, 7, fv3("-"));
console.log(res3);

const res4 = fv2(5, 7, fv3("*2"));
console.log(res4);
