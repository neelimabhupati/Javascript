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
    }

    inputComment.value = "";
    displayComments(index);
}

function displayComments(index){

    let displayComment = document.getElementById(`comment-display-${index}`);
    commentList = displayComment
    displayComment.innerHTML = "" ;

}

// function displayComments(index) {
//     let commentBox = document.getElementById(`comments-section-${index}`);
//     commentBox.innerHTML = ""; // Patha comments clear chestham

//     // Array unda mariyu dantlo comments unnaya ani check chestham
//     if (book[index].comments && book[index].comments.length > 0) {

//         // Standard for loop
//         for (let i = 0; i < book[index].comments.length; i++) {
//             let item = book[index].comments[i];

//             commentBox.innerHTML += `
//                 <div class="single-comment">
//                     <strong>${item.name}:</strong> ${item.comment}
//                 </div>
//             `;
//         }

//     }
// }

