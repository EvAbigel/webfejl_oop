class ArrayList{ //PascalCase, snake_case, Cebab_case, camelCase
    /**
     * @type {Number}
     */
    #count  //azért nem kell le/const mert ez a class egy tulajdonsága
    #state
    #arraytable

    get Count(){
        return this.#count;
    }

    constructor(array = undefined){
        this.#count = 0;
        this.#state = {};
        this.#arraytable = array;
    }

    AddElement(item){
        const index = this.#count;
        this.#state[index] = item; //kulcs és érték
        Object.defineProperty(this, index, { 
            get: () =>
            { 
                return this.#state[index]
            }, 
            set:(value) =>
            { 
                this.#state[index] = value;
            },
            configurable:true,
            enumerable: true
        })

        this.#count++;
        this.#arraytable.addPersonRow(item);
    }

    Clear(){
        for (let key in this){
            delete this[key];
        }
        this.#state = {};
        this.#count = 0;

        console.log(this.#state);
    }

    Contains(item){
        for (let i = 0; i < this.#count; i++){
            if (this[i] == item){
                return true
            }
        }

        return false;
    }
}

class TableHTMLArray extends HTMLElement{
    #tbody
    constructor(){
        super();
    }

    connectedCallback(){
        const table = document.createElement("table");
        this.appendChild(table);
        const thead = document.createElement("thead");
        table.appendChild(thead);
        this.#tbody = document.createElement("tbody");
        table.appendChild(this.#tbody);
    }

    /**
     * 
     * @param {{nev: String, eletkor: number}} person 
     */
    addPersonRow(person){
        const trow = document.createElement("tr");
        this.#tbody.appendChild(trow);
        const tdnev = document.createElement("td");
        tdnev.innerHTML = person.nev;
        trow.appendChild(tdnev);
        const tdeletkor = document.createElement("td");
        tdeletkor.innerHTML = person.eletkor;
        trow.appendChild(tdeletkor);
    }
}

customElements.define("array-table", TableHTMLArray);

//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
const tablearray = new TableHTMLArray();
document.body.appendChild(tablearray);
tablearray.addPersonRow({nev: "korte", eletkor: 12});

const osztaly = new ArrayList(tablearray);

osztaly.AddElement({nev: 'alma', eletkor: 18});
console.log(osztaly.Contains('alma')); //nekem működik külön változó alkotása nélkül?

osztaly.AddElement({nev:'barack', eletkor: 11});
osztaly.AddElement({nev:'szőlő', eletkor: 2});
console.log(osztaly[0]); //ez az első eleme, nem? mindegy..
console.log(osztaly[2]);

osztaly.Clear();

const button = document.createElement("button");
button.innerHTML = "Hozzáadás";
button.addEventListener("click", () => {
    const element = {nev: "narancs", eletkor: 87};
    osztaly.AddElement(element);
});

document.body.appendChild(button);