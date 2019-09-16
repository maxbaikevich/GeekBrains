var wrap = document.querySelector('.wrapper');
var goods  = document.querySelector('.goods')
var boxBasket = document.createElement('p');
boxBasket.classList.add('boxbasket');
var product = document.createElement('p');
var productItem1 = document.createElement('p');
var productItem2 = document.createElement('p');
var productItem3 = document.createElement('p');
productItem1.classList.add('product');
productItem2.classList.add('product');
productItem3.classList.add('product');

wrap.appendChild(boxBasket);
wrap.appendChild(goods);
goods.appendChild(productItem1);
goods.appendChild(productItem2);
goods.appendChild(productItem3);
product1= {
    name: 'Куртка',
    price: 9000,
    color: 'black'
};
product2 = {
    name: 'Штаны',
    price: 2000,
    color: 'pink'
};
product3 = {
    name: 'рубашка',
    price: 3000,
    color: 'blue'
};
var basket = [];
basket.push(product1, product2, product3);

function countBasketPrice(basket){
    var check = 0;
    for(var i = 0; i < basket.length; i++){
      check+= basket[i].price;
    }
    return check;
  }
  
  a = countBasketPrice(basket);
  if(basket.length === 0) {
    boxBasket.textContent = 'Корзина пуста'; 
  } else {
    boxBasket.textContent = `В корзине: ${basket.length} товарa на сумму ${a} рублей`;
    productItem1.textContent = `товар: ${basket[0].name} цена: ${basket[0].price} p`;
    productItem2.textContent = `товар: ${basket[1].name} цена: ${basket[1].price} p`;
    productItem3.textContent = `товар: ${basket[2].name} цена: ${basket[2].price} p`;
  }

