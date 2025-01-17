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
        const index = this.#count;  //így rövidebb lenne szerintem: this.#state[this.#count++] = item;
        this.#state[index] = item; //kulcs és éerték
        this.#count++;

        console.log(this.#state)
    }

    Clear(){
        this.#state = {};
        console.log(this.#state);
    }
}

const osztaly = new ArrayList();
osztaly.AddElement('alma');
osztaly.AddElement('barack');
osztaly.Clear();