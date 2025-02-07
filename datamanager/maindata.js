//closure


/** Definiáltunk egy person objektumot, globáis, def - definiál, type- felhasznál
 * @typedef {{nev: String, eletkor: Number}} Person
 * 
 * @callback UpdateCallback
 * @param {Person[]} persons
 * @returns {void}
 */
class DataManager{
    /**
     * @type {Person[]}
     */
    #array
    /** funkció értékét fogja tárolni
     * @type {UpdateCallback}
     */
    #updateCallback

    /**
     * 
     * @param {Person[]} array 
     */
    constructor( array = []){
        this.#array = array;
        this.#updateCallback = () => {}; //mindegy hgy mennyi paramétere van, kell egy alapértelmezzett érték mert akkor undefined
    }

    /**
     * 
     * @param {UpdateCallback} callback 
     */
    setUpdateCallback(callback){
        this.#updateCallback = callback;
        this.#updateCallback(this.#array);
    }

    /**
     * 
     * @param {Person} element 
     */
    add(element){ //hozzáadjuk a belső tömbünkhöz
        this.#array.push(element);
        this.#updateCallback(this.#array);
    }

    /**
     * 
     * @param {String} name 
     */
    filterName(name){ //strig param, keresi a nevet
        const result = [];
        let talale = false;

        for (let i = 0; i < this.#array.length; i++){
            if (this.#array[i].nev.toLowerCase().includes(name.toLowerCase())){
                result.push(this.#array[i]);
                talale = true;
            }
        }

        this.#updateCallback(result);
        console.log(result);

    }

    /**
     * 
     * @param {Number} age 
     */
    filterAge(age){ //Number param, keresi a kort
        const result = [];
        let talale = false;
        
        for (let i = 0; i < this.#array.length; i++){   //for offal is lehet
            if (this.#array[i].eletkor === age){
                result.push(this.#array[i]);
                talale = true;
            }
        }

        this.#updateCallback(result);
        console.log(result);
    }

    filter(filterCallback){
        const result = [];
        
        for (let i = 0; i < this.#array.length; i++){   //for offal is lehet
            if (filterCallback(this.#array[i])){
                result.push(this.#array[i]);
            }
        }

        this.#updateCallback(result);
        console.log(result);
    }

}


class DataTable{

    /**
     * @type {HTMLTableElement}
     */
    #tbody

    /**
     * 
     * @param {DataManager} dataManager 
     */
    constructor(dataManager){ //table, tbody alkotása
        const table = createElement("table", document.body);
        this.#tbody = createElement("tbody", table);

        dataManager.setUpdateCallback(persons => {
            this.#renderTable(persons);
        });
    }

    #renderTable(persons){
        this.#tbody.innerHTML = "";

            for (let elem of persons){
                const tr = createElement("tr", this.#tbody);

                const td = createElement("td", tr);
                td.innerHTML = elem.nev;
                const td2 = createElement("td", tr);
                td2.innerHTML = elem.eletkor;
            }
    }
}

function createElement(type, parent){
    const element = document.createElement(type);
    parent.appendChild(element);

    return element;
}

function addBreak(){
    createElement("br", document.body);
}


//-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

const emberek = [
    {
        nev: "Józsi",
        eletkor: 17
    },
    {
        nev: "Teri",
        eletkor: 16
    },
    {
        nev: "Gábor",
        eletkor: 17
    }
]

const data= new DataManager(emberek);
const dataTable = new DataTable(data);


//data.filterName("Teri");
//data.filterAge(17); //az marad ami teljesül

const label1 = createElement("label", document.body);
label1.innerHTML = "Név:";

addBreak();

const nevinput = createElement("input", document.body);
nevinput.addEventListener("input", (event) => {
    data.filterName(event.target.value);
})

addBreak();

const label2 = createElement("label", document.body);
label2.innerHTML = "Kor:";

addBreak();

const korinput = createElement("input", document.body);
korinput.addEventListener("input", (event) => {
    data.filter((person) => {
        return person.eletkor === Number(event.target.value);
    })
})
addBreak();

/**
 * tallóztunk
 * majd change event
 * majd readastext
 * kaptunk egy load-ot
 * 
 * ez mind majd freader.result -> ebben lesz a string
 */

const inputField = document.createElement("input");
inputField.type = "file";
document.body.appendChild(inputField);

inputField.addEventListener("change", (event)=>{
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(file); //küld egy eseményt, azt kell felhasználni, minden egy db string
    fileReader.onload = () =>{ //akkor fut le amikor readastext késze van, lehet hogy sokkal később
        const stringErtek = fileReader.result; //result az string
        const array = stringErtek.split("\n");

        for (const elem of array){
            const data56 = elem.split(";");

            const person = {
                nev: data56[0],
                eletkor: Number(data56[1])
            }

            data.add(person);

        }
    }
});

