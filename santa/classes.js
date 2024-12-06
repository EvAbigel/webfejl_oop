class Factory{
 // TODO 1, 2, 3, 4, 9, 10

    constructor(){
        this.manoklista = new Array(); //lehet [] is, 
    }

    addMano(mano){
        this.manoklista.push(mano);
        createRow(mano);
        console.log(this.manoklista);
    }

    

}

class Companion{
 
    constructor(i1d, kereszt, vezetek, reszleg){
        this.id = i1d;
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
