let currentPhotoIndex = 0;

function renderPhotos() {

    let container = document.getElementById('content');
    container.innerHTML = '';
    for (let i = 0; i < photoList.length; i++) {
        container.innerHTML += 
        `<button id= "photo${i}" class= "photo-card"   onClick= "openPhoto(${i})" aria-label="View ${photoList[i].title}">
        <img src="${photoList[i].src}" alt="${photoList[i].alt}">
        </button>`;
    }
}

// To open photo function
function openPhoto(index) {
    currentPhotoIndex = index;
    updatedPopup();
    document.getElementById('popup').classList.remove('d-none');
    document.getElementById('close-btn').focus();

}

//To update current popup details function
function updatedPopup() {
    let currentPhoto = photoList[currentPhotoIndex];

    document.getElementById('popup_img').src = currentPhoto.src;
    document.getElementById('popup_img').alt = currentPhoto.alt;
    document.getElementById('photo_title').innerHTML = currentPhoto.title;
    document.getElementById('photo-counter').innerText = `${currentPhotoIndex + 1} / ${photoList.length}`;
}

//next photo function
function nextPhoto() {
    currentPhotoIndex++;
    if (currentPhotoIndex >= photoList.length) { // if 11 >= 11 then photo index 0 will come
        currentPhotoIndex = 0;
    }
    updatedPopup();
}

//previous photo function
function prevPhoto() {
    currentPhotoIndex--;
    if (currentPhotoIndex < 0) {
        currentPhotoIndex = photoList.length - 1; // if -1 < 0, index value will become 11.
    }
    updatedPopup();
}

// close the popup function
function closePhoto() {
    document.getElementById('popup').classList.add('d-none');
}

// Esc key press, then close the screen
function handleEscapeKey(event){
    if (event.key === 'Escape') {
        closePhoto();
    }
};

// Function 2: Handle dark overlay click
function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
        closePhoto();
    }
}

// Function 3: Handle Tab key focus trap inside popup
function handleTabFocus(event) {
    if (event.key !== 'Tab') return;

    const focusables = Array.from(this.querySelectorAll('button, [tabindex]:not([tabindex="-1"])'));
    if (focusables.length === 0) return;

    const firstElement = focusables[0];
    const lastElement = focusables[focusables.length - 1];

    if (event.shiftKey) { // Shift + Tab (Reverse)
        if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
        }
    } else { // Normal Tab (Forward)
        if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
        }
    }
}

// --- Event Listeners Attachment ---

// ESC Key Global Listener
document.addEventListener('keydown', handleEscapeKey);

// Popup Specific Listeners
const popupElement = document.getElementById('popup');
popupElement.addEventListener('click', handleOverlayClick);
popupElement.addEventListener('keydown', handleTabFocus);