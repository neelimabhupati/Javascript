function renderBooks() {
    let container = document.getElementById('book-container');
    container.innerHTML = "";

    for (let index = 0; index < book.length; index++) {
        container.innerHTML += getbookdetails(index);

        const commentsContainer = document.getElementById(`comment-display-${index}`);

        for (let Commindex = 0; Commindex < book[index].comments.length; Commindex++) {
            commentsContainer.innerHTML += displayComments(index, Commindex);

        }
    }

}


function peopleLike(index, element) {

    if (book[index].isLiked === undefined) {
        book[index].isLiked = false;
    }

    if (book[index].isLiked === false) {
        book[index].likes += 1;
        book[index].isLiked = true;
        element.classList.add('liked')
    } else {
        book[index].likes -= 1;
        book[index].isLiked = false;
        element.classList.remove('liked');
    }
    document.getElementById(`like-count-${index}`).innerText = book[index].likes;
}

function peopleComment(index) {
    let inputComment = document.getElementById(`comment-input-${index}`);
    let commentText = inputComment.value;

    if (commentText.trim() !== "") {
        book[index].comments.push({ name: "User", comment: commentText.trim() });
        renderBooks();
    }

    inputComment.value = "";

}

function displayComments(index, Commindex) {

    const comment = book[index].comments[Commindex];
    return /*html*/`
    <div class = "comment-row">
    <div class="comment-user"><strong>[${comment.name}]</strong></div>
    <div class="comment-colon">:</div>
    <div class="comment-text"> ${comment.comment}</div>
    </div>
    `;
}

renderBooks();

