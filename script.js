const pokemonButton = document.getElementById('addPokemon');
const divPokemonButton = document.getElementById('botaoPokemon');
const formulario = document.getElementById('form');
const pokedexLista = document.getElementById('listagem');
const buttonSubmit = document.getElementById('sendPokemon');
const nome = document.getElementById('nomePokemon');
const numeroPok = document.getElementById('numberPokemon');
const url = document.getElementById('imgPokemon');
const numeroPokedex = document.getElementsByClassName('estilizarParagrafo');

pokemonButton.addEventListener('click', () => {
    // Esconde o botão e revela o formulário
    formulario.style.display = 'flex';
    divPokemonButton.remove();
})

buttonSubmit.addEventListener('click', () => envioInfo());

function envioInfo() {
    // Verifica os inputs
    if(nome.value == '' || numeroPok.value == '' || url.value == ''){
        alert('Erro! Adicione algo aos campos!');
        return;
    }
    
    // Criação dos elementos
    const Itens = document.createElement('li');
    const paragrafo = document.createElement('p');
    const img = document.createElement('img');
    const tipoSelecionado = document.querySelectorAll('input[name="tipoPokemon"]:checked');
    img.setAttribute('src', url.value);
    img.setAttribute('alt', nome.value);
    Itens.textContent = nome.value;
    paragrafo.textContent = `Nº ${numeroPok.value}`;
    paragrafo.setAttribute('class', 'estilizarParagrafo');

    // Verifica se o número do Pokémon está sendo repetido
    for(let i = 0; i < numeroPokedex.length; i++){
        if(numeroPokedex[i].textContent == paragrafo.textContent){
            console.log(numeroPokedex[i].textContent);
            alert("Você precisa adicionar um número da Pokédex novo!");
            return;
        }
    }

    // Adição dos elementos na página
    Itens.appendChild(paragrafo);
    Itens.appendChild(img);

    if(tipoSelecionado.length == 0){
        alert("Adicione ao menos um tipo de Pokémon!");
        return;
    }

    for(let i = 0; i < tipoSelecionado.length; i++){
        const tipoItem = document.createElement('p');
        tipoItem.textContent = tipoSelecionado[i].value;
        tipoItem.setAttribute('class', tipoSelecionado[i].value.toLowerCase());
        Itens.appendChild(tipoItem);
        // Desmarca todas as opções anteriormente marcadas
        tipoSelecionado[i].checked = false;
    }
    pokedexLista.appendChild(Itens);

    // Esvazia o formulário
    nome.value = '';
    numeroPok.value = '';
    url.value = '';

}