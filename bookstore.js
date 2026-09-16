function renderBooks(){
    let container = document.getElementById('book-container');
    container.innerHTML = "";

    for (let index = 0; index < book.length; index++) {
       container.innerHTML += getbookdetails(index);
        
    }
}

console.log(renderBooks());
renderBooks();

function peopleLike(index){
    book[index].likes += 1;
    renderBooks();
}

function peopleComment(index){
    let inputComment = document.getElementById(`comment-input-${index}`);
    let commentText = inputComment.value;

    if(commentText.trim() !== ""){
        book[index].comments.push({ name: "User", comment: commentText.trim() });
        displayComments(index);
    }

    inputComment.value = "";
   
}

function displayComments(index){

    let displayComment = document.getElementById(`comment-display-${index}`);
    
    if (!displayComment) return; // Element lekapothe error rakunda legapodaniki
    
    let commentsList = "";
    let comments = book[index].comments;

    for (let i = 0; i < comments.length; i++) {
        commentsList += `<p><strong>${comments[i].name}:</strong> ${comments[i].comment}</p>`;
    }

    displayComment.innerHTML = commentsList;
}



