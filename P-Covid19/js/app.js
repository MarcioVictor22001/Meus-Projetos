let allEstados = [];
let estadosLista = null;

window.addEventListener('load', () => {
  estadosLista = document.querySelector('#estadosLista');
  estados();
});

function estados() {
  allEstados = states.results.map((states) => {
    const { Nome } = states;
    return {
      Nome: Nome,
    };
  });

  render();
}

function render() {
  stateList();
}

function stateList() {
  let statesHTML = '<div>';

  allEstados.forEach((states) => {
    const { Nome } = states;

    const stateHTML = `
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="#">${Nome}</a></li>
      </ul>
    `;

    statesHTML += stateHTML;
  });
  estadosLista.innerHTML = statesHTML;
}
