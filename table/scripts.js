const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

class Person{
    constructor(object){
        this.firstname1 = object.firstname1;
        this.firstname2 = object.firstname2;
        this.lastname = object.lastname;
    }

    render(tbody){
        const tr = document.createElement("tr");
        tbody.appendChild(tr);

        const td1 = createElementWText("td", this.lastname, tr);
        const td2 = createElementWText("td", this.firstname1, tr);
        if (this.firstname2 == undefined){
            td2.colSpan = 2;
        }
        else{
            const td3 = createElementWText("td", this.firstname2, tr);
        }
        
    }
}

class FormController{
    #form   //#-gel private fieldeket lehet létrehozni

    get lastname(){
        const lastNameInput = this.#getInputById("lastname");
        return lastNameInput.value;
    }

    get firstname1(){
        const firstName1Input = this.#getInputById("firstname1");
        return firstName1Input.value;
    }

    get firstname2(){
        const firstName2Input = this.#getInputById("firstname2");
        return firstName2Input.value;
    }

    constructor(form){
        this.#form = form; //kívülről nem lehet elérni
    }

    #getInputById(id){  //ennek segítségével tudunk gttereket definiálni
        return this.#form.querySelector('#' + id);  
        //query -> input id lekérésére alkalmas
        //document.getElementById -> form gyerekei
    }
}

function init(){
    const tbody = document.getElementById('tbodyId');
    const form = document.getElementById("form");
    const formCtrlr = new FormController(form);

    form.addEventListener('submit', function(e){
        e.preventDefault();

        const obj = {
            lastname: formCtrlr.lastname,
            firstname1: formCtrlr.firstname1,
            firstname2: formCtrlr.firstname2
        };

        const pers = new Person(obj);
        pers.render(tbody);
    })
    
    

    for (const elem of array){  //azért const mert úgyse változtatjuk meg az elemet, csak felhasználjuk
        const pers = new Person(elem);
        pers.render(tbody);
    }
}

function createElementWText(ele, innerhtml,parent){
    const element = document.createElement(ele);
    element.innerHTML = innerhtml;
    parent.appendChild(element);

    return element;
}

init();


