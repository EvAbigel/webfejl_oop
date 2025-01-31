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
            if (this.#array[i].nev.includes(name)){
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

}


class DataTable{

    /**
     * 
     * @param {DataManager} dataManager 
     */
    constructor(dataManager){ //table, tbody alkotása
        const table = createElement("table", document.body);
        const tbody = createElement("tbody", table);

        dataManager.setUpdateCallback(persons => {
            tbody.innerHTML = "";

            for (let elem of persons){
                const tr = createElement("tr", tbody);

                const td = createElement("td", tr);
                td.innerHTML = elem.nev;
                const td2 = createElement("td", tr);
                td2.innerHTML = elem.eletkor;
            }
        });
    }
}

function createElement(type, parent){
    const element = document.createElement(type);
    parent.appendChild(element);

    return element;
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

const data = new DataManager(emberek);
const dataTable = new DataTable(data);


data.filterName("Teri");
data.filterAge(17); //az marad ami teljesül

//-