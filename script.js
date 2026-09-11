

//1. notizen anzeigen lassen


// -> wann werden sie angezeigt?
// function renderNotes(){
//     let contentref = document.getElementById('content')

//     contentref.innerHTML= notes
// }
let notes = ['banana', 'rasen mählen'];
let notesTitles = ['1', '2'];

let trashNotesTitles = [];
let trashNotes = [];

function renderNotes() {
    let contentref = document.getElementById('content')

    contentref.innerHTML = "";


    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentref.innerHTML += getNoteTemplate(indexNote);
    }
}
function getNoteTemplate(indexNote) {
    return `<p>+ title: ${notesTitles[indexNote]} -> ${notes[indexNote]} <button onClick="notetoTrash(${indexNote})"> X </button></p>`;
}

function renderTrashNotes() {
    let trashContentref = document.getElementById('trash_content')

    trashContentref.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentref.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}

//display the output on HTML
function getTrashNoteTemplate(indexTrashNote) {
    return `<p>+ title: ${trashNotesTitles[indexTrashNote]} -> ${trashNotes[indexTrashNote]} <button onClick="deleteNote(${indexTrashNote})"> X </button></p>`;
}

//2.notizen hunzufügen
function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;

    notes.push(noteInput);
    renderNotes();
    noteInputRef.value= "";
}

function notetoTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);
    let trashNoteTitle = notesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNoteTitle[0]);

    renderNotes();
    renderTrashNotes();
}

//3.notizen löschen
// welche notz muss gelöst werder
// wann muss die notiz gelöst werden
// anzeige update

function deleteNote(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote)
    renderNotes();
   
    renderTrashNotes();

}
//4. notizen archivieren