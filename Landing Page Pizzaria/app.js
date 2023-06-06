const menu = document.querySelector('.menu span');
const navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', ()=>{
  navMenu.classList.toggle('ativo')
})

import saboresPizza from "./dist/saboresPizza.js";
window.addEventListener("load", () => {
  criarCards();
  addItemToCart();
});

const menuPizza = document.querySelector(".menu-pizza");

function criarCards() {
  saboresPizza.forEach((sabor) => {
    const pizzaCard = document.createElement("div");

    pizzaCard.classList.add("pizza-card");

    pizzaCard.innerHTML = `
        <div class="pizza-card-img">
        <img src="${sabor.img}" alt="${sabor.nome}">
        </div>
        <div class="pizza-card-info">
            <h1 class="card-title">${sabor.nome}</h1>
            <div class="pizza-sizes">
                  <select name="pizza-Size" class="pizzaSize" onChange="selectOptions(this)">
                        <option selected>Tamanho</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="big">Big</option>
                  </select>
            </div>

            <div class="pizzaValue_buy">
                  <div class="pizzaValue_buyInfo">
                        <span class="material-icons">
                              paid
                        </span>
                        <h3 class="pizza_moneyValue">50</h3>
                  </div>
            
                  <button type="button" class="btnBuyPizza">Add to Cart</button>
            </div>
        </div>
        `;

    menuPizza.appendChild(pizzaCard);
  });
}

let cartCount = 0;
function addItemToCart() {
  const cartValue = document.querySelector(".cartNumber");
  const btnAddToCart = document.querySelectorAll(".btnBuyPizza");
  clearCart();
  
  btnAddToCart.forEach((btn) => {
    btn.addEventListener("click", () => {
      cartCount += 1;
      cartValue.textContent = cartCount.toString();
      if (cartValue.textContent != "Empty") {
        cartValue.classList.add("addNumber");
      }
    });
  });
}

const deliveryCart = document.querySelector(".delivery-cart");
deliveryCart.addEventListener("click", clearCart);

function clearCart() {
  const cartValue = document.querySelector(".cartNumber");
  cartValue.textContent = 'Empty';
  cartValue.classList.remove("addNumber");
  cartCount=0;
}