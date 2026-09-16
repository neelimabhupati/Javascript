function renderBooks(){
    let container = document.getElementById('book-container');
    container.innerHTML = "";

    for (let index = 0; index < book.length; index++) {
       container.innerHTML += getbookdetails(index);
        
    }

    for (let index = 0; index < book.length; index++) {
        displayComments(index);
        
    }
}


renderBooks();


function peopleLike(index, element){
    book[index].likes += 1;
    element.book.toggle('liked');
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
        commentsList += `
        <div class = "comment-row">
        <div  class="comment-user"><strong>[${comments[i].name}]</strong></div>
        <div class="comment-colon">:</div>
        <div class="comment-text"> ${comments[i].comment}</div>
        </div>
        `;
    }

    displayComment.innerHTML = commentsList;
}



