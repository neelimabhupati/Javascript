function getbookdetails(index) {
    return /*html*/`
    <div class="book-info">
        <div class= "book-title"><strong>${book[index].name}</strong></div>
            <hr>
                <img class= "book-image" src="${book[index].image}" alt=${book[index].name}>
            <hr>
                <div class="price-like-container">
                <div class ="details-table">
                <div class="detail-label"><strong>Price:</strong></div>
                <div class="detail-colon">:</div>
                <div class="detail-value">${book[index].price} € </div>
                </div>
                <div class= "like-comment" onclick="peopleLike(${index},this)">
                    <span class="heart-icon">❤</span> 
                    <span id="like-count-${index}">${book[index].likes}</span>
                </div>
    </div>

    <div class = "details-table">
        <div class="detail-label"><strong>Author</strong></div>
        <div class="detail-colon">:</div>
        <div class="detail-value">${book[index].author}</div>

        <div class="detail-label"><strong>Published Year</strong></div>
        <div class="detail-colon">:</div>
        <div class="detail-value"> ${book[index].publishedYear}</div>

        <div class="detail-label"><strong>Category</strong></div>
        <div class="detail-colon">:</div>
        <div class="detail-value">${book[index].genre}</div>
    </div>

    <hr>
    <div class="people-choice">
        <div id="comment-display-${index}" class="comment-section"></div>

            <div class = "add-comment-box">
                <input type="text" class= "text-inputclass" id="comment-input-${index}" placeholder="Write a comment...">
                <div class= "like-comment" onclick="peopleComment(${index})">➤</div>
            </div>
        </div>
    </div>
    `;
}