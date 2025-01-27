/*

OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
cartao da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
    - passo 3 - fazer aparecer o próximo cartão da lista 
    - passo 4 - buscar o cartão que esta selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
anterior da lista
    - passo 5 - dar um jeito de pegar o elemento HTML da seta voltar
    - passo 6 - dar um jeito de identificar o clique do usuário  seta voltar
    - passo 7 - fazer aparecer o cartão anterior da lista
    - passo 8 - buscar o cartão que esta selecionado e esconder
*/

// Passo 1
const btnAvancar = document.getElementById('btn-avancar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;
// Passo 5
const btnVoltar = document.getElementById('btn-voltar')
// Passo 2
btnAvancar.addEventListener('click', function(){
    if(cartaoAtual === cartoes.length -1) return;
    // Passo 4 - Adicionar a classe selecionado
    esconderCartaoSelecionado();
    // Passo 3 
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
})

// Passo 6
btnVoltar.addEventListener('click', function(){
    if(cartaoAtual === 0) return;
    // Passo 8 - Adicionar a classe selecionado
    esconderCartaoSelecionado();
    // Passo 7 
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
})

function mostrarCartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.add('selecionado');
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

