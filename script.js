function renderFoodlist(){
    let food_id = document.getElementById('food_container_id');
    food_id.innerHTML = "";

    for (let index = 0; index < menuDetails_Array.length; index++) {
        food_id.innerHTML += getFoodDetails(index);

        const foodListContainer = document.getElementById(`foodlist-display-${index}`);

         for (let foodlistindex = 0; foodlistindex < menuDetails_Array[index].items.length; foodlistindex++) {
             foodListContainer.innerHTML += displayFoodList(index, foodlistindex);
        }
    }
}

