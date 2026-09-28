let cartArray = [];

function renderFoodlist() {
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

function renderCart() {
    // 1. మొదట పాపప్ ని ఓపెన్ చేయండి (d-none క్లాస్ రిమూవ్ చేయండి)
    console.log("RenderCart ఫంక్షన్ కాల్ అయ్యింది!"); // ఇది ఫంక్షన్ స్టార్ట్ అయ్యిందని చెప్తుంది


    let cartPopup = document.getElementById('stricky-container-id');
    if (cartPopup) {
        cartPopup.classList.remove('d-none'); // ఇది పాపప్ ని చూపిస్తుంది
        console.log("RenderCart ఫంక్షన్ కాల్ అయ్యింది!"); // ఇది ఫంక్షన్ స్టార్ట్ అయ్యిందని చెప్తుంది

    }

    let cartItemContainer = document.getElementById('cart-items');

    let totalElement = document.getElementById('cart-total');

    if (!cartItemContainer || !totalElement) return;
    cartItemContainer.innerHTML = '';

    let total = 0;
    let deliveryFee = 4.99;
    for (let index = 0; index < cartArray.length; index++) {
        let item = cartArray[index];

        if (item && item.price !== undefined) {
            let itemTotal = item.price * item.amount;
            total += itemTotal;

            cartItemContainer.innerHTML += `
            <div class="cart-item">
                <div class="cart-item-info">
                <span class="qty-count">${item.amount} x </span>
                <span class="item-name">${item.name}</span>
                
                </div>
                <div class="cart-item-controls">

                    <div class="btn-group">
                        <button class="qty-btn" onclick="decreaseItem(${index})">-</button>
                        <span class="qty-count">${item.amount}</span>
                        <button class="qty-btn" onclick="increaseItem(${index})">+</button>
                    </div>

                    <div class="price-box">
                        <span class="item-total-price">${itemTotal.toFixed(2)} €</span>
                    </div>

                </div>
            </div>
            `;
        }
    }
    let finalTotal = total + deliveryFee;
    document.getElementById('cart-total').innerHTML = `
        <div class="cart-summary">
        
            <div class="summary-row">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)} €</span>
            </div>
            <div class="summary-row">
                <span>Delivery Fee:</span>
                <span> ${deliveryFee.toFixed(2)}€</span>
            </div>

            <hr>
            <div class="summary-row">
                <span>Total:</span>
                <span> <strong>${finalTotal.toFixed(2)} €</strong></span>
            </div>
            
        </div>
        `;


    //  <button class="buy_now_btn" onclick="buyNow(${index})">Buy Now</button>

}

function addToCart(index, foodlistindex) {

    let selectedItem = menuDetails_Array[index].items[foodlistindex];

    let existingIndex = cartArray.findIndex(item => item.name === selectedItem.foodItem_name)

    if (existingIndex > -1) {
        cartArray[existingIndex].amount += 1;
    } else {
        cartArray.push({
            name: selectedItem.foodItem_name,
            price: Number(selectedItem.foodItem_price),
            amount: 1
        });
    }

    // 2. ఒకవేళ మొబైల్ ఫుటర్ లో కౌంట్ బ్యాడ్జ్ ఉంటే దాన్ని కూడా అప్‌డేట్ చేస్తుంది
    if (typeof updateCartBadge === "function") {
        updateCartBadge();
    }
    saveToLocalStorage();
    renderCart();

}

// Mobile footer paina badge (count) update chese function
function updateCartBadge() {
    let badgeElement = document.getElementById('mobile-cart-badge');
    if (!badgeElement) return;

    // Cart lo unna anni items amount ni sum chestundi
    let totalCount = cartArray.reduce((sum, item) => sum + item.amount, 0);

    if (totalCount > 0) {
        badgeElement.textContent = totalCount;
        badgeElement.classList.remove('d-none');
    } else {
        badgeElement.classList.add('d-none');
    }
}

// User Footer Mobile Cart Icon ni press chesinappudu matrame idi run avvali
function openCartPopup() {
    renderCart(); // UI render chestundi
    let cartPopup = document.getElementById('stricky-container-id');
    if (cartPopup) {
        cartPopup.classList.remove('d-none'); // Popup open chestundi
    }
}


function increaseItem(cartIndex) {
    cartArray[cartIndex].amount += 1;
    saveToLocalStorage();
    renderCart();
}

function decreaseItem(cartIndex) {
    if (cartArray[cartIndex].amount > 1) {
        cartArray[cartIndex].amount -= 1;
    } else {
        cartArray.splice(cartIndex, 1);
    }

    saveToLocalStorage();
    renderCart();
}

function saveToLocalStorage() {
    localStorage.setItem("cartArray", JSON.stringify(cartArray));
}

function getFromLocalStorage() {
    let savedCart = localStorage.getItem("cartArray");

    if (savedCart) {
        cartArray = JSON.parse(savedCart);
    }
}

function placeOrder() {

    if (cartArray.length === 0) return;
    cartArray = [];
    saveToLocalStorage();
    renderCart();
    let oderDialog = document.getElementById('order-confirmed-dialog');
    oderDialog.showModal();

}

function closeOrderDialog() {
    let orderDialog = document.getElementById('order-confirmed-dialog');
    orderDialog.close();

    orderDialog.addEventListener('click', (event) => {
        // మనం క్లిక్ చేసినది డైలాగ్ బాక్స్ అయితేనే క్లోజ్ చేయి (లోపలి కంటెంట్ క్లిక్ చేస్తే క్లోజ్ అవ్వదు)
        if (event.target === orderDialog) {
            orderDialog.close();
        }
    });
}

function closeCart() {
    let cartPopup = document.getElementById('stricky-container-id'); // మీ కార్ట్ కంటైనర్ ID
    cartPopup.classList.add('d-none'); // ఇది క్లోజ్ చేస్తుంది
}

getFromLocalStorage();
renderFoodlist();
updateCartBadge();
renderCart();
