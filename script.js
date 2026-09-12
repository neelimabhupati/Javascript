

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

let archiveNotes = [];
let archiveNotesTitles = [];

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


    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentref.innerHTML += getNoteTemplate(indexNote);
    }
}
function getNoteTemplate(indexNote) {
    //     return `<p>+ title: ${notesTitles[indexNote]} -> ${notes[indexNote]} <button onClick="notetoTrash(${indexNote})"> X </button></p>`;
    return `
        <div class="note-card">
            <div class="note-title">${notesTitles[indexNote]}</div>
            <div class="note-body">${notes[indexNote]}</div>
            <div class="card-buttons">
                <button class="card-btn" onclick="notetoTrash(${indexNote})">X</button>
                <button class="card-btn" onclick="notetoArchive(${indexNote})">A</button>
            </div>
        </div>
    `;

}

function renderTrashNotes() {
    let trashContentref = document.getElementById('trash_content')

    trashContentref.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentref.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}

//display the output on HTML
// function getTrashNoteTemplate(indexTrashNote) {
//     return `<p>+ title: ${trashNotesTitles[indexTrashNote]} -> ${trashNotes[indexTrashNote]} <button onClick="deleteNote(${indexTrashNote})"> X </button></p>`;
// }

// 2. RENDER ARCHIVE NOTES
function renderArchiveNotes() {
    let archiveContentref = document.getElementById('archiev_content');
    archiveContentref.innerHTML = "";

    for (let indexArchiveNote = 0; indexArchiveNote < archiveNotes.length; indexArchiveNote++) {
        archiveContentref.innerHTML += getArchiveNoteTemplate(indexArchiveNote);
    }
}

// 2. Archive Card Template
function getArchiveNoteTemplate(indexArchiveNote) {
    return `
        <div class="note-card">
            <div class="note-title">${archiveNotesTitles[indexArchiveNote]}</div>
            <div class="note-body">${archiveNotes[indexArchiveNote]}</div>
            <div class="card-buttons">
                <button class="card-btn" onclick="archiveToTrash(${indexArchiveNote})">X</button>
                <button class="card-btn" onclick="archiveToNotes(${indexArchiveNote})">N</button>
            </div>
        </div>
    `;
}

// 3. Trash Card Template
function getTrashNoteTemplate(indexTrashNote) {
    return `
        <div class="note-card">
            <div class="note-title">${trashNotesTitles[indexTrashNote]}</div>
            <div class="note-body">${trashNotes[indexTrashNote]}</div>
            <div class="card-buttons">
                <button class="card-btn" onclick="deleteNote(${indexTrashNote})">X</button>
                <button class="card-btn" onclick="trashToNotes(${indexTrashNote})">N</button>
            </div>
        </div>
    `;
}

//2.notizen hunzufügen
function addNote() {
    // let noteInputRef = document.getElementById('note_input');
      // let noteInput = noteInputRef.value;
    let titleInputRef = document.getElementById('title_input');
    let titleInput = titleInputRef.value;
    let contentInputRef = document.getElementById('content_input');
    let contentInput = contentInputRef.value;

    if (titleInputRef.value.trim() !== "" || contentInputRef.value.trim() !== "") {
    notesTitles.push(titleInput);
    notes.push(contentInput);

    saveToLocalStorage();
    renderNotes();

    titleInputRef.value = "";
    contentInputRef.value = "";
    }
}

function archiveToNotes(indexArchiveNote) {
    notes.push(archiveNotes.splice(indexArchiveNote, 1)[0]);
    notesTitles.push(archiveNotesTitles.splice(indexArchiveNote, 1)[0]);

    saveToLocalStorage();
    renderArchiveNotes();
    renderNotes();
}

function archiveToTrash(indexArchiveNote) {
    trashNotes.push(archiveNotes.splice(indexArchiveNote, 1)[0]);
    trashNotesTitles.push(archiveNotesTitles.splice(indexArchiveNote, 1)[0]);

    saveToLocalStorage();
    renderArchiveNotes();
    renderTrashNotes();
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

function notetoArchive(indexNote) {
    let archiveNote = notes.splice(indexNote, 1);
    archiveNotes.push(archiveNote[0]);
    
    let archiveNoteTitle = notesTitles.splice(indexNote, 1);
    archiveNotesTitles.push(archiveNoteTitle[0]);

    saveToLocalStorage();
    renderNotes();
    renderArchiveNotes();
}


//   trashToNotes function
function trashToNotes(indexTrashNote) {
    notes.push(trashNotes.splice(indexTrashNote, 1)[0]);
    notesTitles.push(trashNotesTitles.splice(indexTrashNote, 1)[0]);

    saveToLocalStorage();
    renderTrashNotes();
    renderNotes();
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
    trashNotes.splice(indexTrashNote, 1);
    trashNotesTitles.splice(indexTrashNote, 1);

    saveToLocalStorage();
    renderTrashNotes();
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