

//1. notizen anzeigen lassen


// -> wann werden sie angezeigt?
// function renderNotes(){
//     let contentref = document.getElementById('content')

//     contentref.innerHTML= notes
// }
let notes = ['banana', 'rasen mählen', 'orange'];
function renderNotes(){
    let contentref = document.getElementById('content')

    contentref.innerHTML= "";


    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
       
        contentref.innerHTML += getNoteTemplate(indexNote);
    }
}


function getNoteTemplate(indexNote){
    return `<p>+ ${notes[indexNote]}<button onClick="deleteNote(${indexNote})">X </button></p>`;
}


//2.notizen hunzufügen
function addNote(){
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;

    notes.push(noteInput);

    renderNotes();

}

//3.notizen löschen
// welche notz muss gelöst werder
// wann muss die notiz gelöst werden
// anzeige update

function deleteNote(indexNote){
    notes.splice(indexNote, 1);

    renderNotes();
}
//4. notizen archivieren