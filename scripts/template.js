function getFoodDetails(index) {
    return /*html*/ `
    
    <div class = "food_info">
        
        <div class = "food_category">
        <img class = "food_category_item" src="${menuDetails_Array[index].foodCategories_image}" alt="${menuDetails_Array[index].foodCategories}">
        <h2 class = "food_category_item">${menuDetails_Array[index].foodCategories} </h2>
        </div>


       
        
    </div>
    `
}

 // <hr>
        //     <img class= "food-image" src="${menuDetails_Array[index].items.foodItem_image}" alt="${menuDetails_Array[index].name}">
        // <hr>
        // <div class="food-title"><strong>${menuDetails_Array[index].items.name}</strong></div>
        // <div class="food-price">${menuDetails_Array[index].items.foodItem_price.toFixed(2)} € </div>
        // <div class= "food-description">${menuDetails_Array[index].items.foodItem_description}</div>
        // <div class="add-cart">${menuDetails_Array[index].items.add_To_cart}</div>