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
        const index = this.#count;
        this.#state[index] = item; //kulcs és érték
        Object.defineProperty(this, index, { 
            get:function()
            { 
                return this.#state[index]
            }, 
            set:function(value)
            { 
                this.#state[index] = value;
            } 
        })

        this.#count++;
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
console.log(osztaly[2]);

osztaly.Clear();

// const alma = {}
// Object.defineProperty(alma, 'nev', { value: "Ferenc", writable: true})  //alma objektumnál, a ferenc érték kulcsa a név lesz
// alma.nev = 'asd'
// console.log(alma);