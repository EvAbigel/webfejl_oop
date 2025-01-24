class ArrayList{ //PascalCase, snake_case, cebab-case, camelCase
    /**
     * @type {Number}
     */
    #count  //azért nem kell le/const mert ez a class egy tulajdonsága
    #state
    #arrayTable

    get Count(){
        return this.#count;
    }

    constructor(array = undefined){
        this.#count = 0;
        this.#state = {};
        this.#arrayTable = array;

    }

    AddElement(item){
        const index = this.#count;
        this.#state[index] = item; //kulcs és érték
        Object.defineProperty(this, index, { 
            get: () =>
            { 
                return this.#state[index]
            }, 
            set: (value) =>
            { 
                this.#state[index] = value;
            },
            configurable:true,
            enumerable: true
        })

        this.#arrayTable.addPersonRow(item);

        this.#count++;
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
                return true;
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
    
    connectedCallback(){ //akkor fut le amikor a DOM tree hez hozzáadod
        const table = document.createElement("table");
        this.appendChild(table);
        const thead = document.createElement("thead");
        table.appendChild(thead);
        this.#tbody = document.createElement("tbody");
        table.appendChild(this.#tbody);
    }

    /**
     * 
     * @param {{nev: String, eletkor: Number}} person 
     */
    addPersonRow(person){
        const row = document.createElement("tr");
        this.#tbody.appendChild(row);

        createHTMLTableElement("td", person.nev, this.#tbody);
        createHTMLTableElement("td", person.eletkor, this.#tbody);

    }
}
customElements.define("array-table", TableHTMLArray);


function createHTMLTableElement(tag, innerH, parent){
    const element = document.createElement(tag);
    element.innerHTML = innerH;
    parent.appendChild(element);
}

//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
const newArray = new TableHTMLArray();
document.body.appendChild(newArray);
newArray.addPersonRow({nev:"Lili", eletkor:22});

const osztaly = new ArrayList(newArray);

osztaly.AddElement({nev:'alma', eletkor: 33});
console.log(osztaly.Contains('alma')); //nekem működik külön változó alkotása nélkül? 
osztaly.AddElement({nev:'barack', eletkor: 11});
osztaly.AddElement({nev:'szőlő', eletkor: 22});
console.log(osztaly[0]); //ez az első eleme, nem? mindegy..
console.log(osztaly[2]);

osztaly.Clear();



// const alma = {}
// Object.defineProperty(alma, 'nev', { value: "Ferenc", writable: true})  //alma objektumnál, a ferenc érték kulcsa a név lesz
// alma.nev = 'asd'
// console.log(alma);