
/**
 * Ezzel az enttással fog dolgozni a manager osztalyunk
 * (a manager tombje ezeket fogja tartalmazni)
 */
class Question{

    /**
     * @type {string}
     */
    #questionText;

    /**
     * @type {string[]}
     */
    #answers;

    /**
     * @type {string}
     */
    #rightAnswer;


    /**
     * @returns {string[]} a valaszokat tartalmazza
     */
    get answers(){
        return this.#answers
    }

    /**
     * @returns {string} a kerdes szoveget tartalmazza
     */
    get questionText(){
        return this.#questionText;
    }

    /**
     * @returns {string} a jó válasz szövegét tartalmazza
     */
    get rightAnswer(){
        return this.#rightAnswer
    }

    /**
     * 
     * @param {string} questionText 
     * @param {string[]} answers 
     * @param {string} rightAnswer 
     */
    constructor(questionText, answers, rightAnswer){
        this.#questionText = questionText;
        this.#answers = answers;
        this.#rightAnswer = rightAnswer;
    }
}