const formDiv = document.getElementById('formDiv');
const pokemonButton = document.getElementById('addPokemon');
const divPokemonButton = document.getElementById('divPokemonButton');
const formulario = document.getElementById('form');
const pokedexLista = document.getElementById('listagem');
const buttonSubmit = document.getElementById('sendPokemon');
const nome = document.getElementById('nomePokemon');
const numeroPok = document.getElementById('numberPokemon');
const url = document.getElementById('imgPokemon');
const esconderFormulario = document.getElementById('voltarMenu');
const numeroPokedex = document.getElementsByClassName('estilizarParagrafo');
let idContagem = 0;

pokemonButton.addEventListener('click', () => {
    // Esconde o botão e revela o formulário
    formulario.removeAttribute('id', 'form');
    formulario.setAttribute('class', 'formularioStyle');
    divPokemonButton.remove();
});

buttonSubmit.addEventListener('click', () => envioInfo());

esconderFormulario.addEventListener('click', () => {
    // Retorna ao menu inicial sem o formulário
    formulario.removeAttribute('class', 'formularioStyle');
    formulario.setAttribute('id', 'form');
    formDiv.appendChild(divPokemonButton);
});

function envioInfo() {
    const tipoSelecionado = document.querySelectorAll('input[name="tipoPokemon"]:checked');

    // Verifica os inputs se estão vazios
    if(nome.value == '' || numeroPok.value == '' || url.value == ''){
        alert('Erro! Adicione algo aos campos!');
        return;
    }
    
    // Verifica se ao menos um tipo de pokémon foi selecionado
    if(tipoSelecionado.length == 0){
        alert("Adicione ao menos um tipo de Pokémon!");
        return;
    }
    
    // Criação dos elementos
    const Itens = document.createElement('li');
    const paragrafo = document.createElement('p');
    const img = document.createElement('img');
    const buttonRemover = document.createElement('button');
    img.setAttribute('src', url.value);
    img.setAttribute('alt', nome.value);
    Itens.textContent = nome.value;
    paragrafo.textContent = `Nº ${numeroPok.value}`;
    paragrafo.setAttribute('class', 'estilizarParagrafo');
    
    // Verifica se o número do Pokémon está sendo repetido
    for(let i = 0; i < numeroPokedex.length; i++){
        if(numeroPokedex[i].textContent == paragrafo.textContent){
            alert("Você precisa adicionar um número da Pokédex novo!");
            return;
        }
    }
    Itens.setAttribute('id', `${++idContagem}`);
    buttonRemover.textContent = `Remover Pokémon ${idContagem}`;
    buttonRemover.setAttribute('class', 'removerPokemon');

    // Adição dos elementos na página
    Itens.appendChild(paragrafo);
    Itens.appendChild(img);
    
    // Passa o tipo selecionado para um parágrafo juntamente com a sua classe CSS estilizada
    for(let i = 0; i < tipoSelecionado.length; i++){
        const tipoItem = document.createElement('p');
        tipoItem.textContent = tipoSelecionado[i].value;
        tipoItem.setAttribute('class', tipoSelecionado[i].value.toLowerCase());
        Itens.appendChild(tipoItem);
        // Desmarca todas as opções anteriormente marcadas
        tipoSelecionado[i].checked = false;
    }
    Itens.appendChild(buttonRemover);
    pokedexLista.appendChild(Itens);
    buttonRemover.addEventListener('click', () => {
        Itens.remove();
    });

    // Esvazia o formulário
    nome.value = '';
    numeroPok.value = '';
    url.value = '';
}