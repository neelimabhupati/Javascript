let currentPhotoIndex = 0;

function renderPhotos() {
    //select the #content div element in HTML
    let container = document.getElementById('content');

    //photo container ni clear chestam
    container.innerHTML = '';

    // loop for photoList in db.js
    for (let i = 0; i < photoList.length; i++) {
        container.innerHTML += `<div id= "photo${i}" class= "photo-card" onClick= "openPhoto(${i})" style= "background-image: url('${photoList[i]}');"> </div>`;
    }
}

// To open photo function

function openPhoto(index) {
    currentPhotoIndex = index;

    updatedPopup(); // calling helper function.
    document.getElementById('popup').classList.remove('d-none');
    // const dialoge = document.getElementById('popup');

    // Dialogue open background focus disabled

    // HTML5 Dialog Modal ని ఓపెన్ చేయడానికి
    if (typeof dialoge.showModal === "function") {
        dialoge.showModal();
    }

    dialoge.showModal();
    

    // Background elements కి మాత్రమే inert పెట్టాలి (Popup కి కాదు)
    // Background వెనుక ఉన్న Main, Header, Footer లకే inert పెట్టాలి
    document.querySelector('header').setAttribute('inert', '');
    document.querySelector('.main_class').setAttribute('inert', '');
    document.querySelector('footer').setAttribute('inert', '');
}

//To update current popup details function
function updatedPopup() {
    let imgPath = photoList[currentPhotoIndex];
    let fileName = imgPath.split('/').pop();

    document.getElementById('popup_img').src = imgPath;
    document.getElementById('photo_title').innerHTML = fileName;
    document.getElementById('photo-counter').innerText = `${currentPhotoIndex + 1}/ ${photoList.length}`;
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

    // Background inert తొలగించాలి
    document.querySelector('header').removeAttribute('inert');
    document.querySelector('.main_class').removeAttribute('inert');
    document.querySelector('footer').removeAttribute('inert');

}

// Esc key press, then close the screen
document.addEventListener('keydown', function (event) {

    if (event.key === 'Escape') {
        closePhoto();
    }
});


//Dark overlay click → close
document.getElementById('popup').addEventListener('click', function (event) {
    if (event.target === this) {
        closePhoto();
    }
});
