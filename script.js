

//1. notizen anzeigen lassen


// -> wann werden sie angezeigt?
// function renderNotes(){
//     let contentref = document.getElementById('content')

//     contentref.innerHTML= notes
// }

let allNotes = {
    'notesTitles': ['1', '2'],
    'notes': ['banana', 'rasen mählen'],
    'archiveNotes': [],
    'archiveNotesTitles': [],
    'trashNotes': [],
    'trashNotesTitles': []
}


function moveNote(indexNote, startKey, destinationKey) {

    let note = allNotes[startKey].splice(indexNote, 1);
    allNotes[destinationKey].push(note[0]);
    let notesTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
    allNotes[destinationKey + "Titles"].push(notesTitle[0]);

    renderAllNotes();
}

function renderAllNotes() {
    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();
    saveToLocalStorage();

}

function renderTrashNotes() {
    let trashContentref = document.getElementById('trash_content')

    trashContentref.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++) {
        trashContentref.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}


function inIt() {
    getFromLocalStorage();
    saveToLocalStorage();
    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();
}

function renderNotes() {
    let contentref = document.getElementById('content')

    contentref.innerHTML = "";


    for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
        contentref.innerHTML += getNoteTemplate(indexNote);
    }
}



// 3. Trash Card Template

//display the output on HTML
// function getTrashNoteTemplate(indexTrashNote) {
//     return `<p>+ title: ${trashNotesTitles[indexTrashNote]} -> ${trashNotes[indexTrashNote]} <button onClick="deleteNote(${indexTrashNote})"> X </button></p>`;
// }

// 2. RENDER ARCHIVE NOTES
function renderArchiveNotes() {
    let archiveContentref = document.getElementById('archiev_content');
    archiveContentref.innerHTML = "";

    for (let indexArchiveNote = 0; indexArchiveNote < allNotes.archiveNotes.length; indexArchiveNote++) {
        archiveContentref.innerHTML += getArchiveNoteTemplate(indexArchiveNote);
    }
}





//2.notizen hunzufügen
function addNote() {
    // let noteInputRef = document.getElementById('note_input');
    // let noteInput = noteInputRef.value;
    let titleInputRef = document.getElementById('title_input');
    let titleInput = titleInputRef.value;
    let contentInputRef = document.getElementById('content_input');
    let contentInput = contentInputRef.value;


    // if (titleInputRef.value.trim() !== "" || contentInputRef.value.trim() !== "") {
    if (titleInput.trim() !== "" && contentInput.trim() !== "") {
        notesTitles.push(titleInput);
        notes.push(contentInput);

        saveToLocalStorage();
        renderAllNotes();

        titleInputRef.value = "";
        contentInputRef.value = "";
    }
}
//3.notizen löschen
// welche notz muss gelöst werder
// wann muss die notiz gelöst werden
// anzeige update

// function deleteNote(indexNote) {
//     let trashNote = notes.splice(indexNote, 1);
//     trashNotes.push(trashNote[0])
//     renderNotes();
//     saveToLocalStorage();
//     renderTrashNotes();

// }

function deleteNote(indexTrashNote) {
    allNotes.trashNotes.splice(indexTrashNote, 1);
    allNotes.trashNotesTitles.splice(indexTrashNote, 1);

    renderAllNotes();
}

//4. notizen archivieren

function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
    localStorage.setItem("trashNotesTitles", JSON.stringify(trashNotesTitles));
    localStorage.setItem("archiveNotes", JSON.stringify(archiveNotes));
    localStorage.setItem("archiveNotesTitles", JSON.stringify(archiveNotesTitles));
}

function getFromLocalStorage() {
    let storedNotes = JSON.parse(localStorage.getItem("notes"))
    let storedTitles = JSON.parse(localStorage.getItem("notesTitles"));
    let storedTrashNotes = JSON.parse(localStorage.getItem("trashNotes"));
    let storedTrashTitles = JSON.parse(localStorage.getItem("trashNotesTitles"));
    let storedArchiveNotes = JSON.parse(localStorage.getItem("archiveNotes"));
    let storedArchiveTitles = JSON.parse(localStorage.getItem("archiveNotesTitles"));


    if (storedNotes) notes = storedNotes;
    if (storedTitles) notesTitles = storedTitles;
    if (storedArchiveNotes) archiveNotes = storedArchiveNotes;
    if (storedArchiveTitles) archiveNotesTitles = storedArchiveTitles;
    if (storedTrashNotes) trashNotes = storedTrashNotes;
    if (storedTrashTitles) trashNotesTitles = storedTrashTitles;

}