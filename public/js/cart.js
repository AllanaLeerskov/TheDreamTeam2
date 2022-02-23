function generateCartItems(cartItems) {
    let itemsHTML = '';
    cartItems.forEach((item) => {
        itemsHTML += `
        <div class="cart-item flex items-center pb-4 border-b border-gray-200">
            <div class="cart-item-image w-40 h-24 bg-white p-4 rounded-lg ">
                <img class="w-full h-full object-contain" src="${item.photo}">
            </div>
            <div class="cart-item-details flex-grow">
                <div class="cart-item-title font-bold text-sm text-gray-600">
                    ${item.title}
                </div>
                <div class="cart-item-brand text-sm text-gray-400">   
                    ${item.description}
                </div>
            </div>
            <div class="cart-item-counter w-48 flex items-center">
                <div data-id="${item.id}" class="cart-item-decrease cursor-pointer text-gray-400 bg-purple-400 rounded h-6 w-6 flex justify-center items-center hover:bg-gray-600 mr-2">
                    <i class="fas fa-chevron-left fa-xs "></i>
                </div>
                <h4 class="text-gray-400">x${item.quantity}</h4>
                <div data-id="${item.id}" class="cart-item-increase cursor-pointer text-gray-400 bg-purple-400 rounded h-6 w-6 flex justify-center items-center hover:bg-gray-600 ml-2">
                    <i class="fas fa-chevron-right fa-xs "></i>
                </div>
            </div>
            <div class="cart-item-total-cost w-48 font-bold text-gray-400">
                    ${item.price * item.quantity}
            </div>
            <div data-id='${item.id}' class="cart-item-delete w-10 font-bold text-gray-400 cursor-pointer hover:text-gray-600">
                <i class="fas fa-times"></i>
            </div>
        </div>      
        `
    })
    document.querySelector('cart-items').innerHTML = itemsHTML
    createEventListeners();
}

function createEventListeners( ){
    let decreaseButtons = document.querySelectorAll('.cart-item-decrease');
    let increaseButtons = document.querySelectorAll('.cart-item-decrease');

    let deleteButtons = document.querySelectorAll('.cart-item-delete')

    decreaseButtons.forEach((button) => {
        button.addEventListener('click', function() {
            decreaseCount(button.dataset.id);
        })
    })
    increaseButtons.forEach((button) => {
        button.addEventListener('click', function() {
            increaseCount(button.dataset.id);
        })
    })
}

// getCartItems();