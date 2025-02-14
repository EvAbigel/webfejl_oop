/**
 * @callback NextQuestionCallback
 * @param {string} kerdes a kerdes szovgeget tartalmazza
 *
 * @callback NextAnswersCallback
 * @param {string []} valaszok a valaszokat szartalmaza
 *
 * @callback FinishCallback
 * @param {string} result a vegeredmeny szoveget szartalmaza
 */
class Manager{

    /**
     * @type {Question[]} a kerdezek tombjet tartalmazza
     */
    #array;

    /**
     * @type {Number} az aktualis kerdes szamat tartalmazza
     */
    #currentQuestionNumber;

    /**
     * @type {Object} a kerdesszamonkent eltarolt valaszokat tartalmazza
     */
    #selectedAnswers;

    /**
     * @type {NextQuestionCallback}
     */
    #nextQuestionCallback

    /**
     * @type {NextAnswersCallback}
     */
    #nextAnswersCallback

    /**
     * @type {FinishCallback}
     */
    #finishCallback;

    /**
     * 
     * @param {Question[]} array kerdestomb
     */
    constructor(array=[]){
        this.#array = array;
        this.#currentQuestionNumber = 0;
        this.#selectedAnswers = {};
    }

    /**
     * 
     * Beallitja a kovetkezo kerdes betoltesekor a kerdeshez tartozo logikat
     * 
     * @param {NextQuestionCallback} callback tartalmazza a függvényt ami akkor fut le amikor a következő kérdésre lépünk
     */
    setNextQuestionCallback(callback){
        this.#nextQuestionCallback = callback;
    }

    /**
     * 
     * @param {NextAnswersCallback} callback 
     */
    setNextAnswerCallback(callback){
        this.#nextAnswersCallback = callback;
    }

    /**
     * 
     * Beallitja az eredmeny kiertekelesehez szukseges fuggvenyt
     * 
     * @param {FinishCallback} callback tartalmazza a fggvenyt ami lefut amikor
     * vegigmentunk a erdeseken
     */
    setFinishCallback(callback){
        this.#finishCallback = callback
    }

    nextQuestion(answer){
        this.#selectedAnswers[this.#currentQuestionNumber] = answer; //itt taroljuk a valasz erteket
        this.#currentQuestionNumber++;
        if (this.#currentQuestionNumber < this.#array.length){ //van e meg kerdes
            const nextQuestion = this.#array[this.#currentQuestionNumber];
            this.#nextQuestionCallback(nextQuestion.questionText);
            this.#nextAnswersCallback(nextQuestion.answers);
        }
        else{
            let counter = 0;
            for(const index in this.#array){
                if(this.#array[index].rightAnswer === this.#selectedAnswers[index]){
                    counter++; //akkor noveljuk a countert ha a rightAnswer megegyezik a tarolttal
                }
            }

            const result = `A kérdéssor véget ért: ${this.#array.length}/${counter}`;
            this.#finishCallback(result);
        }
    }

    /**
     * megjeleníti az első kérdéseke és a válaszokat
     */
    start(){
        this.#nextQuestionCallback(this.#array[0].questionText);
        this.#nextAnswersCallback(this.#array[0].answers);
    }
}