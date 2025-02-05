function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    if(quantidade < 1){
        alert('Quantidade de ingressos inválida')
    }
    else if(tipoIngresso == 'pista'){
        comprarPista(quantidade);
    }
    else if(tipoIngresso == 'inferior'){
        comprarInferior(quantidade);
    }
    else if(tipoIngresso == 'superior'){
        comprarSuperior(quantidade);
    }
}

function comprarPista(quantidade) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidade > qtdPista){
        alert('Quantidade de ingressos indisponível para pista');
    } else{
        qtdPista = qtdPista - quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso');
    }
    limpar();
}

function comprarInferior(quantidade) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(quantidade > qtdInferior){
        alert('Quantidade de ingressos indisponível para cadeira Inferior');
    } else{
        qtdInferior = qtdInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso');
    }
    limpar();
}

function comprarSuperior(quantidade) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidade > qtdSuperior){
        alert('Quantidade de ingressos indisponível para cadeira superior');
    } else{
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso');
    }
    limpar();
}

function limpar(){
    document.getElementById('qtd').value = null;
}

