class Table{
    #manager;

    constructor(manager){

        this.#manager = manager;
        const header = ['Név', 'Átlag', 'Állítás', 'Helytelen-e']
        const tbody = Gomszab.makeTableWithHeader(header);

        this.#manager.setAddCallback((student)=>{
            const tr = document.createElement("tr");
            tbody.appendChild(tr);

            Gomszab.makeCellToRow(tr, student.name);
            Gomszab.makeCellToRow(tr, student.average);
            Gomszab.makeCellToRow(tr, student.comment);
            Gomszab.makeCellToRow(tr, student.bad ? 'Igen' : 'Nem');
        });
        
    }
}