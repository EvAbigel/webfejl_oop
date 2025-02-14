class Area{ //ős, benne 2 leszármazott, question és answer
    /**
     * @type {HTMLDivElement}
     */
    #div;

    /**
     * @returns {HTMLDivElement} visszater az aktualis terulettel,
     * ami az elemeket tartalmazza
     */
    get div(){ //publikus getter
        return this.#div
    }

    /**
     * 
     * @param {Manager} manager
     * @param {string} cssClass 
     */
    constructor(cssClass, manager){
        const container = this.#getContainer();
        this.#div = document.createElement("div");
        this.#div.className = cssClass;
        container.appendChild(this.#div);
        manager.setFinishCallback(resultText =>{
            container.innerHTML = "";
            const resultDiv = document.createElement("div");
            resultDiv.textContent = resultText;
            resultDiv.className = "result";
            container.appendChild(resultDiv);
        })
    }

    /**
     * Letrehozza a conteiner classal rendelkezo elemet 
     * amelyen belul a div lesz megtalalhato
     * Ha mar letezik, akkor a mar letezot adja vissza
     * 
     * @returns {HTMLDivElement} containert tartalmazza
     */
    #getContainer(){
        let container = document.querySelector(".container");
        if(!container){
            container = document.createElement("div");
            container.className = "container";
            document.body.appendChild(container);
        }

        return container;
    }
}

/**
 * ez a terulet fogja tartalmazni a kerdest
 */
class QuestionArea extends Area{ //leszármazunk az area osztalybol
    
    /**
     * 
     * @param {string} cssClass 
     * @param {Manager} manager 
     */
    constructor(cssClass, manager){
        super(cssClass, manager); //az ős class construktorát hívja meg
        manager.setNextQuestionCallback((kerdesSzoveg) =>{
            this.div.innerHTML = '';
            const questionCard = document.createElement("div");
            questionCard.textContent = kerdesSzoveg;
            this.div.appendChild(questionCard);
        })
    }
}

/**
 * ez a terulet fogja tartalmazni valaszokat
 */
class AnswerArea extends Area{

    /**
     * 
     * @param {string} cssClass 
     * @param {Manager} manager 
     */
    constructor(cssClass, manager){
        super(cssClass, manager);
        manager.setNextAnswerCallback((valaszok)=> {
            this.div.innerHTML = "";
            for(const valasz of valaszok){
                const answerCard = document.createElement("div");
                answerCard.className = "item";
                answerCard.textContent = valasz;
                answerCard.addEventListener('click', ()=>{
                    manager.nextQuestion(valasz);
                })
                this.div.appendChild(answerCard);
            }
        })
    }
}
