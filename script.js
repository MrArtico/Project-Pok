const pokemonButton = document.getElementById('addPokemon');
const pokedexLista = document.getElementById('gridPok');
const form = document.querySelector('form');
const radios = document.querySelectorAll('input.tipos');

pokemonButton.addEventListener('click', () => {
    form.setAttribute('class', 'criacaoPokemon');
    pokemonButton.style.display = 'none';
    const buttonSubmit = document.createElement('input');
    buttonSubmit.setAttribute('type', 'submit');
    buttonSubmit.setAttribute('id', 'envioPokemon');
    buttonSubmit.textContent = 'Enviar Pokémon!';
    form.appendChild(buttonSubmit);
})

buttonSubmit.addEventListener('click', () => {
    const nomePok = document.getElementById('nomePokemon');
    const numPok = document.getElementById('numberPokemon');
    const url = document.getElementById('imgPokemon');

    const divItens = document.createElement('div'); // Container para cada pokémon
    const item = document.createElement('li'); // Nome do Pokémon
    const numItem = document.createElement('p').setAttribute('id', 'estilizarParagrafo'); // Numero do Pokémon
    const imgItem = document.createElement('img'); // Imagem dele
    const tipo = document.createElement('p'); // Tipo do Pokémon

    item.textContent = nomePok.value;
    numItem.textContent = numPok.value;
    imgItem.setAttribute('src', `${url}`);

    pokedexLista.appendChild(divItens);
    divItens.appendChild(item);
    divItens.appendChild(numItem);
    divItens.appendChild(imgItem);
    divItens.appendChild(tipo);
})