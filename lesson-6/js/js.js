var listProduct = document.querySelector('.list-product');
var cardsProduct = document.querySelector('#cards-product').content;
var newCardsProduct = cardsProduct.querySelector('.item-product');
var spanNumber = document.querySelector('.span-number');
var navBascet = document.querySelector('.nav-bascet');
var modal = document.querySelector('.modal');
var closeBtn  = document.querySelector('.close');
var productBox = document.querySelector('.product-box');
var foolPrice = document.querySelector('.fool-price'); 




var productInfo1 = {
    imgUrl:'img/Layer-32.jpg',
    text: 'Глина',
    pice: '2000 p'
};
var productInfo2 = {
    imgUrl:'img/Layer-33.jpg',
    text: 'Гель',
    pice: '1000 p'
};
var productInfo3 = {
    imgUrl:'img/Layer-38.jpg',
    text: 'набор',
    pice: '4000 p'
};

 var product = [];
 product.push(productInfo1, productInfo2, productInfo3);


var card  = newCardsProduct.cloneNode(true);
var cardText = card.querySelector('.product-title');
var button = card.querySelector('.button')
var cardImg = card.querySelector('.product-img');
var price = card.querySelector('.product-price');
cardImg.src = product[0].imgUrl;
cardText.textContent = product[0].text;
price.textContent = product[0].pice;
card.appendChild(cardText);
card.appendChild(cardImg);
card.appendChild(price);
card.appendChild(button);
button.classList.remove('button--mod');
button.textContent='Купить';
listProduct.appendChild(card);

var card2  = newCardsProduct.cloneNode(true);
var cardText = card2.querySelector('.product-title');
var button = card2.querySelector('.button')
var cardImg = card2.querySelector('.product-img');
var price = card2.querySelector('.product-price');
cardImg.src = product[1].imgUrl;
cardText.textContent = product[1].text;
price.textContent = product[1].pice;
card2.appendChild(cardText);
card2.appendChild(cardImg);
card2.appendChild(price);
card2.appendChild(button);
button.classList.remove('button--mod');
button.textContent='Купить';
listProduct.appendChild(card2);

var card3  = newCardsProduct.cloneNode(true);
var cardText = card3.querySelector('.product-title');
var button = card3.querySelector('.button')
var cardImg = card3.querySelector('.product-img');
var price = card3.querySelector('.product-price');
cardImg.src = product[2].imgUrl;
cardText.textContent = product[2].text;
price.textContent = product[2].pice;
card3.appendChild(cardText);
card3.appendChild(cardImg);
card3.appendChild(price);
card3.appendChild(button);
button.classList.remove('button--mod');
button.textContent='Купить';
listProduct.appendChild(card3);
var buttonClic = document.querySelectorAll('.button');
for(var i = 0; i < buttonClic.length; i++ ){
    var btn = buttonClic[i];
    
    btn.addEventListener('click', function(evt){
        evt.preventDefault();
    spanNumber.textContent = parseInt(spanNumber.textContent) + 1;
        
    
    });
}
var productName = document.createElement('p');
    productName.classList.add('product-name');
    modal.appendChild(productName);

    var productImg = document.createElement('img');
    productImg.classList.add('product-img');
    modal.appendChild(productImg);

    var productPrice = document.createElement('p');
    productPrice.classList.add('product-price');
    modal.appendChild(productPrice);
    
buttonClic[0].addEventListener('click', function(){
    backetd.push(productInfo1);
    

    productName.textContent = productInfo1.text;
    productImg.src = productInfo1.imgUrl;
    productPrice.textContent = productInfo1.pice;

});
buttonClic[1].addEventListener('click', function(){
    backetd.push(productInfo2);

    var productName = document.createElement('p');
    productName.classList.add('product-name');
    modal.appendChild(productName);

    var productImg = document.createElement('img');
    productImg.classList.add('product-img');
    modal.appendChild(productImg);

    var productPrice = document.createElement('p');
    productPrice.classList.add('product-price');
    modal.appendChild(productPrice);
    

    productName.textContent = productInfo2.text;
    productImg.src = productInfo2.imgUrl;
    productPrice.textContent = productInfo2.pice;
});
buttonClic[2].addEventListener('click', function(){
    backetd.push(productInfo3);
    var productName = document.createElement('p');
    productName.classList.add('product-name');
    modal.appendChild(productName);

    var productImg = document.createElement('img');
    productImg.classList.add('product-img');
    modal.appendChild(productImg);

    var productPrice = document.createElement('p');
    productPrice.classList.add('product-price');
    modal.appendChild(productPrice);

    productName.textContent = productInfo3.text;
    productImg.src = productInfo3.imgUrl;
    productPrice.textContent = productInfo3.pice;
    
});
var backetd =[];

function countBasketPrice(basket){
    var check = 0;
    for(var i = 0; i < basket.length; i++){
      check+= basket[i].pice;
    }
    return check;
  }
  

   a = countBasketPrice(backetd);
   var foolPrice = document.createElement('p');
   modal.appendChild(foolPrice);
   if(backetd.length === 0) {
    foolPrice.textContent = 'Корзина пуста'; 
   }else{
    foolPrice.textContent = `В корзине: ${backetd.length} товарa на сумму ${a} рублей`;

   }
   

navBascet.addEventListener('click', function(evt){
    evt.preventDefault();
    modal.classList.add('modal-show');
    modal.classList.remove('modal-none');
});
closeBtn.addEventListener('click', function(){
    modal.classList.add('modal-none');
});

