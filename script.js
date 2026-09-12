

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

function inIt() {
    getFromLocalStorage();
    saveToLocalStorage();
    renderNotes();
    renderTrashNotes();
}

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
    saveToLocalStorage();
    renderNotes();
    noteInputRef.value = "";
}

function notetoTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);
    let trashNoteTitle = notesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNoteTitle[0]);

    saveToLocalStorage();
    renderNotes();
    renderTrashNotes();
}

//3.notizen löschen
// welche notz muss gelöst werder
// wann muss die notiz gelöst werden
// anzeige update

function deleteNote(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0])
    renderNotes();
    saveToLocalStorage();
    renderTrashNotes();

}
//4. notizen archivieren

function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
    localStorage.setItem("trashNotesTitles", JSON.stringify(trashNotesTitles));
}

function getFromLocalStorage() {
    let myArr = JSON.parse(localStorage.getItem("notes"))
    let storedTitles = JSON.parse(localStorage.getItem("notesTitles"));
    let storedTrashNotes = JSON.parse(localStorage.getItem("trashNotes"));
    let storedTrashTitles = JSON.parse(localStorage.getItem("trashNotesTitles"));

    // // Data unteనే update chestundhi, lekapothe array default values (`['banana', 'rasen mählen']`) thone untundhi
    // if (storedNotes) {
    //     notes = storedNotes; // <-- 'let' లేదు! Direct Global Variable కి Assign చేసాం.
    // }
    // if (storedTitles) notesTitles = storedTitles;
    // if (storedTrashNotes) trashNotes = storedTrashNotes;
    // if (storedTrashTitles) trashNotesTitles = storedTrashTitles;
}