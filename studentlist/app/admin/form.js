/**
 * Megjelenít egy formot és kezeli a formfieldek validációját 
 * és értékeit
 */
class FormController{
    /**
     * @type {Manager}
     */
    #manager

    /**
     * @type {FormField[]}
     */
    #formFieldArray

    /**
     * 
     * @param {{id: string, label: string, type: string, optional?: boolean}[]} fieldConfiguration 
     * @param {Manager} manager 
     */
    constructor(fieldConfiguration, manager){
        this.#formFieldArray = [];
        this.#manager = manager
        const form = document.createElement('form');
        document.body.appendChild(form);
        for(const field of fieldConfiguration){
            const formField = new FormField(field.id, field.label, 
            field.type, field.optional);
            this.#formFieldArray.push(formField)
            form.appendChild(formField.getDivElement());
        }

        const sendButton = document.createElement('button');
        sendButton.textContent = 'Elküld';
        form.appendChild(sendButton);
        form.addEventListener('submit', (e)=>{
            e.preventDefault();
            if(this.#validateAllFields()){ // validáljus a formField elementeket, es megjelenitunk hibauzeneteket
                const value = this.#getValueObject();
                const student = new Student(value.studentname, value.studentaverage, value.studentcomment, value.studentbad);
                manager.add(student);
                e.target.reset();
            }
            //elkerjuk a formfieldek ertekeit
            //hozzaadjuk a manager arrayhoz
            //reseteljuk a formot
        })
    }

    #validateAllFields(){
        let valid = true;
        for (const formField of this.#formFieldArray){
            formField.error = '';
            if(!formField.optional){
                if(formField.value === ''){
                    formField.error = 'Mezo kitoltese kotelezo';
                    valid = false;
                }
            }
        }

        return valid;
    }

    /**
     * a formfieldek ertekei
     * @returns {{studentname: string, studentaverage: string, studentcomment: string, studentbad: boolean}}
     */
    #getValueObject(){
        const result = {};
        for (const formField of this.#formFieldArray){
            result[formField.id] = formField.value;
        }
        return result;
    }
}

/**
 * Felel a fieldek létrehozásáért, értékeiért 
 * és az esetleges hibakért
 */
class FormField{

    /**
     * @type {string}
     */
    #id;

    /**
     * @type {string}
     */
    #type; //lehet checkbox vagy textbox

    /**
     * @type {boolean}
     */
    #optional;

    /**
     * @type {HTMLInputElement}
     */
    #inputField;

    /**
     * @type {HTMLSpanElement}
     */
    #errorField;

    /**
     * @type {HTMLLabelElement}
     */
    #labelElement;

    get id(){
        return this.#id;
    }

    /**
     * @returns {string | boolean} az input field értéke
     */
    get value(){
        if(this.#type === 'checkbox'){
            return this.#inputField.checked;
        }
        return this.#inputField.value;
    }

    get optional(){
        return this.#optional
    }

    /**
     * @param {string} value ami az error spanjának a tartalma lesz
     */
    set error(value){
        this.#errorField.textContent = value;
    }

    constructor(id, labelContent, type, optional = false){
        this.#id = id;
        this.#type = type;
        this.#optional = optional;
        this.#labelElement = Gomszab.makeLabel(id, labelContent);
        this.#inputField = Gomszab.makeInput(id, type);
        this.#errorField = Gomszab.makeErrorField();
    }

    getDivElement(){
        const div = Gomszab.makeDiv([this.#labelElement, this.#inputField, this.#errorField]);
        return div;
    }
}