const pokemonButton = document.getElementById('addPokemon');
const form = document.querySelector('form');
console.log(form);
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
    //Continua amanhã
})