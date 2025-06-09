function sortear(){
    let quantidadeNumeros = parseInt(document.getElementById('quantidade').value);
    let deNumeros = parseInt(document.getElementById('de').value);
    let ateNumeros = parseInt(document.getElementById('ate').value);

    let numero;
    let numerosSorteados = [];

    if(quantidadeNumeros < 1 || deNumeros < 1 || ateNumeros < 1){
        alert('Por favor, preencha todos os campos com valores maiores que 0');
        return;
    }

    if(deNumeros > ateNumeros){
        alert('O valor inicial deve ser menor que o valor final');
        return;
    }

    if(quantidadeNumeros > ateNumeros - deNumeros + 1){
        alert('A quantidade de números a serem sorteados não pode ser maior que o intervalo de números');
        return;
    }

    if(quantidadeNumeros > 1000){
        alert('A quantidade de números a serem sorteados não pode ser maior que 1000');
        return;
    }

    for(let i = 0; i < quantidadeNumeros; i++){
        numero = numeroAleatorio(deNumeros, ateNumeros);
        while(numerosSorteados.includes(numero)){
            numero = numeroAleatorio(deNumeros, ateNumeros);
        }
        numerosSorteados.push(numero);
    }
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Os números sorteados são: ${numerosSorteados}</label>`;

    alterarBotao();

}

function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function alterarBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else{ 
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');}
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
    alterarBotao();
}