const formFieldConfiguration = [
    {id: 'studentname', label: 'nev', type: 'text'},
    {id: 'studentaverage', label: 'atlag', type: 'text'},
    {id: 'studentcomment', label: 'Komment', type: 'text'},
    {id: 'studentbad', label: 'bad-e', type: 'checkbox', optional: true},
]

const manager = new Manager();
const table = new Table(manager);
const formController = new FormController(formFieldConfiguration, manager);

const exportButton = document.createElement('button');
exportButton.textContent = 'Export';
document.body.appendChild(exportButton);

exportButton.addEventListener('click', () =>{
    const link = document.createElement('a');
    const content = manager.generateTextForExport(); //ez lesz a manager array csv formatuma tartalma
    const file = new Blob([content]);
    link.href = URL.createObjectURL(file);
    link.download = 'newdata.csv';
    link.click();
    URL.revokeObjectURL(link.href); // a createobject url csnál egy stringet amivel elérjük, de később nem akarjuk elérni ezért elvettük a jogát
    //security okok miatt hogy ne legyen benne a fájlban, ment performany miatt

})

Gomszab.addFileUploader(fileResult => {
    const fileLines = fileResult.split('\n');
    for(const line of fileLines){
        const fields = line.split(';');
        const bad = fields[3].trim() === '1' ? true : false;
        const student = new Student(fields[0], fields[1], fields[2], bad);
        manager.add(student)
    }
})

