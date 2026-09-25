let cartArray = [];

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

function renderCart(){
    let cartContainer = document.getElementById('stricky-container-id');
    cartContainer.innerHTML = '';

    let total = 0;

    for (let index= 0; index < cartArray.length; index++){
        let item = cartArray[index];

        // total += cartArray[index].price;
        total += item.foodItem_price;

        cartContainer.innerHTML += `
        <div class= "cart-item">

        <span>${item.name}</span>
        <span>${item.price.toFixed(2)}</span>
        </div>

        `;
    }

    document.getElementById('cart-total').innerHTML = `<strong> Total: ${total.toFixed(2)} €</strong>`;
}

function saveToLocalStorage(){
    localStorage.setItem("cartArray", JSON.stringify(cartArray));
}

function getFromLocalStorage(){
    let savedCart = localStorage.getItem("cartArray");

    if(savedCart){
        cartArray = JSON.parse(savedCart);
    }
}