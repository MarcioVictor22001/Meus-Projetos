const inputText = document.querySelector(".inputText");
const btnAdd = document.querySelector(".btnAdd");
const list = document.querySelector(".list");

window.addEventListener("load", (e) => {
  e.preventDefault();
});

btnAdd.addEventListener("click", () => {
  if (inputText.value !== "") {
      const criarElemento = document.createElement("p");
      criarElemento.classList.add("list-item");
      criarElemento.innerText = inputText.value.trim();
      criarElemento.appendChild(removeButton());
      
      list.appendChild(criarElemento);

      inputText.value='';
      inputText.classList.remove('empty')
  } else {
      inputText.classList.add('empty')
  }
});

function removeButton() {
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("btn-remove");

  const spanIcon = document.createElement("span");
  spanIcon.classList.add("material-icons");
  spanIcon.textContent = "delete";
  removeBtn.appendChild(spanIcon);

  removeBtn.addEventListener('click', () => {
      removeBtn.parentNode.remove();
    });

  return removeBtn;
}
