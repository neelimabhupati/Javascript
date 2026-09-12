function getTrashNoteTemplate(indexTrashNote) {
    return `
        <div class="note-card">
            <div class="note-title">${allNotes.trashNotesTitles[indexTrashNote]}</div>
            <div class="note-body">${allNotes.trashNotes[indexTrashNote]}</div>
            <div class="card-buttons">

                <button class="card-btn" onclick="deleteNote(${indexTrashNote})">X</button> 
                <button class="card-btn" onclick="moveNote((${indexTrashNote}),'trashNotes', 'notes')">N</button>
            </div>
        </div>
    `;
}


function getNoteTemplate(indexNote) {
    //     return `<p>+ title: ${notesTitles[indexNote]} -> ${notes[indexNote]} <button onClick="notetoTrash(${indexNote})"> X </button></p>`;
    return `
        <div class="note-card">
            <div class="note-title">${allNotes.notesTitles[indexNote]}</div>
            <div class="note-body">${allNotes.notes[indexNote]}</div>
            <div class="card-buttons">
                <button class="card-btn" onclick="moveNote((${indexNote}),'notes', 'trashNotes')">X</button>
                <button class="card-btn" onclick="moveNote((${indexNote}),'notes', 'archiveNotes')">A</button>
            </div>
        </div>
    `;

}

// 2. Archive Card Template
function getArchiveNoteTemplate(indexArchiveNote) {
    return `
        <div class="note-card">
            <div class="note-title">${allNotes.archiveNotesTitles[indexArchiveNote]}</div>
            <div class="note-body">${allNotes.archiveNotes[indexArchiveNote]}</div>
            <div class="card-buttons">
                <button class="card-btn" onclick="moveNote((${indexArchiveNote}),'archiveNotes', 'trashNotes')">X</button>
                <button class="card-btn" onclick="moveNote((${indexArchiveNote}),'archiveNotes','notes')">N</button>
            </div>
        </div>
    `;
}