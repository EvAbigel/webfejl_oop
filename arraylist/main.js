class ArrayList{ //PascalCase, snake_case, Cebab_case, camelCase
    /**
     * @type {Number}
     */
    #count  //azért nem kell le/const mert ez a class egy tulajdonsága
    #state

    get Count(){
        return this.#count;
    }

    constructor(){
        this.#count = 0;
        this.#state = {};
    }

    AddElement(item){
        this.#state[this.#count++] = item; //kulcs és érték
        console.log(this.#state)
    }

    Clear(){
        this.#state = {};
        console.log(this.#state);
    }
}

//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
const osztaly = new ArrayList();

osztaly.AddElement('alma');
osztaly.AddElement('barack');
osztaly.AddElement({nev:'szőlő'});
console.log(osztaly[0]);

osztaly.Clear();

const alma = {}
Object.defineProperty(alma, 'nev', { value: "Ferenc", writable: true})  //alma objektumnál, a ferenc érték kulcsa a név lesz
alma.nev = 'asd'
console.log(alma);