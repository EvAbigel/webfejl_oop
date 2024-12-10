class Factory{
 // TODO 1, 2, 3, 4, 9, 10

    constructor(){
        this.manoklista = new Array(); //lehet [] is, 
    }

    addMano(mano){
        this.manoklista.push(mano);
        createRow(mano);
    }

    createId(){
        return this.manoklista.length;
    }

    getCompanionById(Id){
        const selectedMano = this.manoklista[Id];
        return selectedMano;
    }

}

class Companion{
 
    constructor(id, kereszt, vezetek, reszleg){
        this.id = id;
        this.keresztnev = kereszt;
        this.vezeteknev = vezetek;
        this.reszleg = reszleg;
        this.products = new Array();
    }

    getName(){
        return this.keresztnev + " " + this.vezeteknev;
    }

    addProduct(product){
        this.products.push(product);
    }
}
