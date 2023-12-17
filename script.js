const pokemonButton = document.getElementById('addPokemon');
const pokedexLista = document.getElementById('listagem');
const form = document.querySelector('form');
const buttonSubmit = document.getElementById('sendPokemon');
const nome = document.getElementById('nomePokemon');
const numeroPok = document.getElementById('numberPokemon');
const url = document.getElementById('imgPokemon');

pokemonButton.addEventListener('click', () => {
    form.setAttribute('class', 'criacaoPokemon');
    pokemonButton.style.display = 'none';
})

buttonSubmit.addEventListener('click', () => envioInfo());

function envioInfo() {
    if(nome.value == '' || numeroPok.value == '' || url.value == ''){
        alert('Erro! Adicione algo aos campos!');
        return;
    }

    const Itens = document.createElement('li');
    const paragrafo = document.createElement('p');
    const img = document.createElement('img');

    img.setAttribute('src', url.value);
    img.setAttribute('alt', nome.value);
    Itens.textContent = nome.value;
    paragrafo.textContent = numeroPok.value;
    paragrafo.setAttribute('id', 'estilizarParagrafo');
    
    Itens.appendChild(paragrafo);
    Itens.appendChild(img);
    pokedexLista.appendChild(Itens);
}