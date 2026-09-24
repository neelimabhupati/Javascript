function renderFoodlist(){
    let food_id = document.getElementById('food_container_id');
    food_id.innerHTML = "";

    for (let index = 0; index < menuDetails_Array.length; index++) {
        food_id.innerHTML += getFoodDetails(index);
    }
}

