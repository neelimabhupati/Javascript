

//1. notizen anzeigen lassen


// -> wann werden sie angezeigt?
// function renderNotes(){
//     let contentref = document.getElementById('content')

//     contentref.innerHTML= notes
// }
let notes = ['banana', 'rasen mählen'];
function renderNotes(){
    let contentref = document.getElementById('content')

    contentref.innerHTML= "";


    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        const note = notes[indexNote];
        contentref.innerHTML += getNoteTemplate(note);
    }
}


function getNoteTemplate(note){
    return `<p> + ${note}</p>`;
}


//2.notizen hunzufügen
function addNote(){
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;

    notes.push(noteInput);

    renderNotes();

}

//3.notizen löschen
//4. notizen archivieren