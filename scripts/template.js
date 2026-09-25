function getFoodDetails(index) {
    return /*html*/ `
    
    <div class = "food_info">
        
        <section class = "food_category">
        <div class= "food_category_details">
            <div class = "food_category_item_img" >
                <img  src="${menuDetails_Array[index].foodCategories_image}" alt="${menuDetails_Array[index].foodCategories}">
            </div>

            <div class = "food_category_item_h2">
                <h2>${menuDetails_Array[index].foodCategories} </h2>
            </div>
        </div>
        </section>

        <div id = "foodlist-display-${index}" class = "complete_food_container">
    
        </div>
       
    </div>
    `
}

function displayFoodList(index, foodlistindex) {
    const foodlist = menuDetails_Array[index].items[foodlistindex];
    return /*html*/`
    <div class = "food_single_card">
    <!-- Image Container -->
        <div class="card_img_box">
            <img class= "food-image" src="${foodlist.foodItem_image}" alt="${foodlist.foodItem_name}">
        </div>

        <!-- Content Details Container -->
        <section class="card_content_box">
            <div class="card_header">
                <span class="food_title"><strong>${foodlist.foodItem_name}</strong></span>
                <span class="food_price"><strong>${foodlist.foodItem_price.toFixed(2)} €</strong></span>
            </div>
            <div class="card_description">
                <p>${foodlist.foodItem_description}</p>
            </div>
            <div class="card_action">
                <button class="add_to_cart_btn" onclick = "addToCart(${index})">Add to Cart</button>
            </div>
        </section>

    `;
}

function addToCart(index){
    
    cartArray.push(menuDetails_Array[index].items.foodItem_name)
    cartArray.push(menuDetails_Array[index].items.foodItem_price)

    saveToLocalStorage();
    renderCart();
}


