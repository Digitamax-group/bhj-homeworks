'use strict';
const cart = document.querySelector('.cart__products');

const reduceBtns = document.querySelectorAll('.product__quantity-control_dec');
const increaseBtns = document.querySelectorAll('.product__quantity-control_inc');

const addToCartBtns = document.querySelectorAll('.product__add');

function whoIsInCart(products, productId) {
    return products.find(element => element.dataset.id == productId);
};

function addToCart(id, img, quantity) {
    let addedProduct = `<div class="cart__product" data-id="${id}"> 
                            <img class="cart__product-image" src="${img}"> 
                            <div class="cart__product-count">${quantity}</div> 
                            <a href="#" class="task__remove">&times;</a> 
                        </div>`;
    cart.insertAdjacentHTML('beforeend', addedProduct);

    const removeBtn = document.body.querySelector('.cart__products').lastElementChild.querySelector('.task__remove');
    removeBtn.addEventListener('click', function (event) {
        event.preventDefault();
        this.closest('.cart__product').remove();
        if (!cart.hasChildNodes()) {
            document.querySelector('.cart').classList.add('hidden');
        };
    });
};

for (let reduceButton of reduceBtns) {
    reduceButton.addEventListener('click', function () {
        let currentValue = Number(this.closest('.product__quantity-controls').querySelector('.product__quantity-value').innerText) - 1;
        if (currentValue <= 0) {
            currentValue = 1;
        }
        this.closest('.product__quantity-controls').querySelector('.product__quantity-value').innerText = currentValue;
    });
};

for (let increaseButton of increaseBtns) {
    increaseButton.addEventListener('click', function () {
        let currentValue = Number(this.closest('.product__quantity-controls').querySelector('.product__quantity-value').innerText) + 1;
        this.closest('.product__quantity-controls').querySelector('.product__quantity-value').innerText = currentValue;
    });
};

for (let addToCartButton of addToCartBtns) {
    addToCartButton.addEventListener('click', function () {

        if (document.querySelector('.cart').classList.contains('hidden')) {
            document.querySelector('.cart').classList.remove('hidden')
        }

        const productsInCart = Array.from(document.querySelectorAll('.cart__product'));
        const currentProductID = this.closest('.product').dataset.id;
        const currentProductImg = this.closest('.product').querySelector('.product__image').src;
        const currentProductQuantity = this.closest('.product__quantity').querySelector('.product__quantity-value').innerText;
        const existingProduct = whoIsInCart(productsInCart, currentProductID);

        if (existingProduct) {
            const currentProductCount = Number(currentProductQuantity);
            const existingProductCount = Number(existingProduct.querySelector('.cart__product-count').innerText);
            existingProduct.querySelector('.cart__product-count').innerText = currentProductCount + existingProductCount;
        } else {
            addToCart(currentProductID, currentProductImg, currentProductQuantity);
        }
    });
}; 
