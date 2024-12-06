/**
 * @type {{
 *   firstName: string;
 *   lastName: string;
 *   products: string[];
 *   area: string;
 * }[]}
 */
const companionList = [
    {
        firstName: 'Géza',
        lastName: 'Kiss',
        area: 'plastic',
        products: ['kisauto', 'barbibaba']
    },
    {
        firstName: 'Ferenc',
        lastName: 'Tóth',
        area: 'paper',
        products: ['könyv']
    },
    {
        firstName: 'Gábor',
        lastName: 'Nagy',
        area: 'plastic',
        products: ['zokni']
    },
]

document.getElementById('companion').addEventListener('submit',function(e){
    e.preventDefault();
    const form =  e.currentTarget
    addCompanion(form, factory);
});

document.getElementById('product').addEventListener('submit',function(e){
    e.preventDefault();
    const form = e.currentTarget;
    addProductForm(form, factory)
});

const factory = new Factory();

/**
 * table render
 */
function initTable(){

    // TODO 6
    for (let i = 0; i < companionList.length; i++){ //végigiterálunk a companionlisten
        const mano = companionList[i] //az i-edik eemet változóba mentjük
        const tmpcomp = new Companion(i, mano.firstName, mano.lastName, mano.area); //a változóval megcsináljunk a compaiont

        for (const product of mano.products){ //a manó objektum product tömbjén megy végig
            tmpcomp.addProduct(product) //hozzáadja a products tömbhöz a productot
        }

        //console.log(tmpcomp.showManoName());
        //console.log(tmpcomp);

        factory.addMano(tmpcomp);
    }

    
    
}


initTable()

/**
 * 
 * eventlistener callback for the button click of companion
 * 
 * @param {EventTarget} e 
 */
function checkEventListener(e){
    const row = e.currentTarget.parentElement.parentElement;
    const companionId = row.id;
    // TODO 10
}



/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
