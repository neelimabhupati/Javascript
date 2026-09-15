function getbookdetails(index) {
    return `
    <div class="book-info">
    <div class= "book-title">${book[index].name}</div>
    <div class= "book-author">${book[index].author}</div>
    <div class= "book-price">${book[index].price}</div>
    <div class= "book-year">${book[index].publishedYear}</div>
    <div class= "book-genre">${book[index].genre}</div>
    <div class="people-choice">
        <button class= "like-comment" onclick="peopleLike(${index})">Like (${book[index].likes})</button>
        <button class= "like-comment" onclick="peopleComment(${index})">Comment</button>
    </div>
    </div>
    `;
}