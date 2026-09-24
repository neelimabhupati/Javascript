function getFoodDetails(index) {
    return /*html*/ `
    
    <div class = "food_info">
        
        <div class = "food_category">
        <img class = "food_category_item" src="${menuDetails_Array[index].foodCategories_image}" alt="${menuDetails_Array[index].foodCategories}">
        <h2 class = "food_category_item">${menuDetails_Array[index].foodCategories} </h2>
        </div>

        <div id = "foodlist-display-${index}" class = "complete_food_container">
    
        </div>
       
    </div>
    `
}

function displayFoodList(index, foodlistindex) {
    const foodlist = menuDetails_Array[index].items[foodlistindex];
    return /*html*/`
    <div class = "food_single_card">^
    <!-- Image Container -->
        <div class="card_img_box">
            <img class= "food-image" src="${foodlist.foodItem_image}" alt="${foodlist.foodItem_name}">
        </div>

        <!-- Content Details Container -->
        <div class="card_content_box">
            <div class="card_header">
                <span class="food_title"><strong>${foodlist.foodItem_name}</strong></span>
                <span class="food_price">${foodlist.foodItem_price.toFixed(2)} €</span>
            </div>
            <div class="card_description">
                <p>${foodlist.foodItem_description}</p>
            </div>
            <div class="card_action">
                <button class="add_to_cart_btn">${foodlist.add_To_cart}</button>
            </div>
        </div>

    `;
}

//  <div class = "food_title_price">
//             <div class="food-title"><strong>${foodlist.foodItem_name}</strong></div>
//             <div class="food-price"><strong>${foodlist.foodItem_price.toFixed(2)} € </strong> </div>
//         </div>

//         <div class = "food_descr_cart">
//         <div class= "food-description">${foodlist.foodItem_description}</div>
//         <div class="add-cart">${foodlist.add_To_cart}</div>
//         </div>
//     </div>
