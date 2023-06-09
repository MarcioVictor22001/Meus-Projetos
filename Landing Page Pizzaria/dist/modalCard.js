export default function renderModal(saboresPizza) {
  const body = document.body;
  const pizzaCard = document.querySelectorAll(".pizza-card");
  let activeModal = null;

  pizzaCard.forEach((item) => {
    item.addEventListener("click", () => {
      if (activeModal) {
        activeModal.remove();
      }

      const modal = document.createElement("div");
      modal.classList.add("modal");

      activeModal = modal;

      const sabor = saboresPizza.find(
        (pizza) => pizza.nome === item.querySelector(".card-title").textContent
      );

      modal.innerHTML = `
          <button class="close-modal">
            <span class="material-icons">close</span>
          </button>
          <div class="modal-image">
            <img src="${sabor.img}" alt="${sabor.nome}">
          </div>
          <div class="modal-info">
            <h1 class="card-title">${sabor.nome}</h1>
            <div class="pizzaValue_buy">
              <div class="pizzaValue_buyInfo">
                <span class="material-icons">
                  paid
                </span>
                <h3 class="pizza_moneyValue">${sabor.valor}</h3>
              </div>
              <button type="button" class="btnBuyPizza">Add to Cart</button>
            </div>
          </div>
        `;

      body.append(modal);
      btnCloseModal();
    });
  });
}

function btnCloseModal() {
  const close = document.querySelector(".close-modal");
  close.addEventListener("click", removeModal);

  function removeModal() {
    const modal = document.querySelector(".modal");
    modal.remove();
    activeModal = null;
  }
}
