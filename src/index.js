'use strict';

// чекбокс

const checkbox = document.querySelectorAll('.filter-check_checkbox');

checkbox.forEach((element) =>{

    element.addEventListener('change', function(){
        if(this.checked){
            this.nextElementSibling.classList.add('checked');
        } else{
            this.nextElementSibling.classList.remove('checked');
        }
    });
});

// end чекбокс


// Корзина

const btnCart = document.getElementById('cart');
const modelCart = document.querySelector('.cart');
const closeBtn = document.querySelector('.cart-close');

btnCart.addEventListener('click', () =>{
    modelCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () =>{
    modelCart.style.display = 'none';
    document.body.style.overflow = '';
});

// end Корзина

// Работа с корзиной (добавление и удаление)

const cards = document.querySelectorAll('.goods .card'),
    cartWrapper = document.querySelector('.cart-wrapper'),
    cartEmpty = document.getElementById('cart-empty'),
    countGoods = document.querySelector('.counter');

cards.forEach((card) => {
    const btn = card.querySelector('button');

    btn.addEventListener('click', () => {
        const cardClone = card.cloneNode(true);
        cartWrapper.appendChild(cardClone);
        cartEmpty.remove();
        showData();
        const removeBtn = cardClone.querySelector('.btn');
        removeBtn.textContent = 'Удалить из корзины';
    });
});

function showData() {
   const cardsCart = cartWrapper.querySelectorAll('.card'),
   cardsPrice = cartWrapper.querySelectorAll('.card-price'),
    cardTotal = document.querySelector('.card-total span');
   let sum = 0;
   countGoods.textContent = cardsCart.length;

cardsPrice.forEach((cardPrice) => {
    let price = parseFloat(cardPrice.textContent);
    sum += price;
});
     cardTotal.textContent = sum;
}

// end Работа с корзиной
