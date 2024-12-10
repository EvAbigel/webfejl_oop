/**
 * Create a row for the companions table;
 * 
 * @param {Companion} companion 
 */
function createRow(companion){
    const table = document.getElementById('companions');
    const tbody = table.querySelector('tbody');
    const tableRow = document.createElement('tr');
    tableRow.id = companion.id;
    tbody.appendChild(tableRow);

   // TODO 7
   const tdnev = createCell(tableRow);
   tdnev.innerHTML = companion.getName()
   const tdreszleg = createCell(tableRow);
   tdreszleg.innerHTML = companion.reszleg;

    const action = createCell(tableRow)
    const button = document.createElement('button');
    button.innerHTML = 'Megtekint';
    action.appendChild(button)
    button.addEventListener('click', checkEventListener)
}

/**
 * Create a new td cell
 * 
 * @param {HTMLTableRowElement} parentElement 
 * @returns {HTMLTableCellElement}
 */
function createCell(parentElement){
    const newCell = document.createElement('td');
    parentElement.appendChild(newCell);
    return newCell;
}

/**
 * 
 * Append a new companion to the selector
 * 
 */
function appendToSelector(){
    const productForm = document.getElementById('product')
    const selector = productForm.querySelector('#companionlist');

    const option = document.createElement('option');
    // TODO 11.

    selector.appendChild(option);
}


/**
 * 
 * Refresh the productlist table
 * 
 * @param {Companion} companion 
 */
function refreshProductList(companion){ //TODO

    const companionName = document.getElementById('companion_name');
    // TODO 10
    companionName.style.display = 'block';
    const productTable = document.getElementById('products');
    productTable.style.display = 'table';
    const productTableBody = productTable.querySelector('tbody')
    productTableBody.innerHTML = '';
    // TODO 10
    companionName.innerHTML = companion.getName();
    productTable.p

}

/**
 * 
 * Add companion function for the companion formelement
 * 
 * @param {HTMLFormElement} form 
 */
function addCompanion(form, factory){ //TODO 
    const firstName =form.querySelector('#cfirstname')
    const lastname =form.querySelector('#clastname')
    const area = form.querySelector('#carea')
    const id = factory.createId();

    

    const firstNameValue = firstName.value;
    const lastNameValue = lastname.value;
    const areaValue = area.value;
    
    const mano = new Companion(id, firstNameValue, lastNameValue,areaValue)
    factory.addMano(mano);
    // TODO 6
}

/**
 * 
 * Add product function for the productformelement
 * 
 * @param {HTMLFormElement} form 
 */

function addProductForm(form, factory){ // TODO
    const selector =form.querySelector('#companionlist')
    const productName = form.querySelector('#productname')
    const companionId = selector.value;
    const product = productName.value;
    // 12
}

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
