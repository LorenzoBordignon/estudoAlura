jogar();

function jogar(){
    let jogarSN = prompt('Escolha uma opção: \n1 - Validar número \n2 - Verificar idade \n3 - String vazia \n4 - Ano bissexto \n5 - Calcular média \n6 - Tamanho do array \n7 - Array Inclui \n8 - Soma dos pares e produto dos ímpares \n9 - Sair');
    if(jogarSN === '' || isNaN(jogarSN)){
        alert('Digite uma das opções válidas');
        return;
    }
    if(jogarSN == 1){
        validarNum();
    }
    else if(jogarSN == 2){
        verificarIdade();
    }
    else if(jogarSN == 3){
        stringVazia();
    }
    else if(jogarSN == 4){
        ehAnoBissexto();
    }
    else if(jogarSN == 5){
        calcularMedia();
    }
    else if(jogarSN == 6){
        tamanhoArray();
    }
    else if(jogarSN == 7){
        arrayIncludes();
    }
    else if(jogarSN == 8){
        somaParesProdutoImpares();
    }
    else if(jogarSN == 9){
        sair();
    }
    else{
        alert('Opção inválida ou jogo cancelado');
    }
}

function validarNum(){
    let  numeroVal = prompt('Digite um número');
    if (numeroVal === '' || isNaN(numeroVal)){
        alert('Digite um número válido');
        jogarNovamente();
    }
    if(numeroVal > 0){
        alert('O número é positivo');
        jogarNovamente();
    }
    else if(numeroVal < 0){
        alert('O número é negativo');
        jogarNovamente();
    }
    else{
        alert('0 é um número neutro');
        jogarNovamente();
    }
}

function verificarIdade(){
    let idade = prompt('Digite sua idade');
    if (idade === '' || isNaN(idade) || idade <= 0){
        alert('Digite uma idade válida');
        jogarNovamente();
    }
    if (idade >= 18){
        alert('Você é maior de idade');
        jogarNovamente();
    }
    else if(idade < 18){
        alert('Você é menor de idade');
        jogarNovamente();
    }
}

function stringVazia(){
    let string = prompt('Digite uma palavra');
    if(string === ''){
        alert('A string está vazia');
        jogarNovamente();
    }
    else{
        alert('A string não está vazia');
        jogarNovamente();
    }
}

function ehAnoBissexto() {
    let anoInput = prompt("Digite um ano para verificar se é bissexto:");
    let ano = parseInt(anoInput);
    if (isNaN(ano) && ano !== 0) {
        alert("Por favor, insira um ano válido");
        jogarNovamente();
    }
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        alert(`${ano} é um ano bissexto.`);
        jogarNovamente();
    } else {
        alert(`${ano} não é um ano bissexto.`);
        jogarNovamente();
    }
}

function calcularMedia(){
    let num1 = parseFloat(prompt('Digite o primeiro número'));
    let num2 = parseFloat(prompt('Digite o segundo número'));
    let num3 = parseFloat(prompt('Digite o terceiro número'));
    let media = (num1 + num2 + num3) / 3;
    let mediaFixada = media.toFixed(2);
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)){
        alert('Digite um número válido');
        jogarNovamente();
    }
    else{
        alert(`A média dos números é ${mediaFixada}`);
        jogarNovamente();
    }
}

function tamanhoArray(){
    let numerosArray = [];
    let tamanho = prompt('Digite o tamanho do array');
    if (tamanho > 10){
        alert('O tamanho máximo do array é 10');
        jogarNovamente();
    }
    else if(tamanho < 1){
        alert('O tamanho mínimo do array é 1');
        jogarNovamente();
    }
    if(tamanho === '' || isNaN(tamanho)){
        alert('Digite um número válido');
        jogarNovamente();
    }
    for(let i = 0; i < tamanho; i++){
        let numero = prompt('Digite um número');
        if(numero === '' || isNaN(numero)){
            alert('Digite um número válido');
            jogarNovamente();
        }
        numerosArray.push(numero)
    }
    tamanho = numerosArray.length;
    alert(`O array possui ${tamanho} elementos e são eles: ${numerosArray.join(', ')}`);
    jogarNovamente();
}

function arrayIncludes(){
    let array = ['MAÇÃ', 'PERA', 'BANANA', 'LARANJA', 'UVA'];
    let elemento = prompt('Digite uma fruta');
    if(array.includes(elemento.toUpperCase())){
        alert('A fruta está no array');
        jogarNovamente();
    }
    else{
        alert('A fruta não está no array');
        jogarNovamente();
    }
}

function somaParesProdutoImpares(){
    let numerosPares = [];
    let numerosImpares = [];
    let somaPares = 0;
    let produtoImpares = 1;
    let quantiaNum = parseInt(prompt('Digite a quantidade de números que deseja inserir'));8
    for(let i = 0; i < quantiaNum; i++){
        let numero = parseInt(prompt('Digite um número'));
        if(isNaN(numero) || numero === '' || numero === 0){
            alert('Insira um número válido');
            return;
        }
        if(numero % 2 === 0){
            somaPares += numero;
            numerosPares.push(somaPares);
        }
        else{
            produtoImpares *= numero;
            numerosImpares.push(produtoImpares);
        }
    }
    if (numerosPares.length > 0 && numerosImpares == ''){
        alert(`A soma dos números pares é ${numerosPares}, e não há números ímpares para exibir`);
        jogarNovamente();
    }
    else if (numerosImpares.length > 0 && numerosPares == ''){
        alert(`O produto dos números ímpares é ${numerosImpares}, e não há números pares para exibir`);
        jogarNovamente();
    }
    else{
    alert(`A soma dos números pares é ${numerosPares} 8e o produto dos números ímpares é ${numerosImpares}`);
    jogarNovamente();
}
}

function sair(){
    alert('Obrigado por jogar')
    return;
}

function jogarNovamente(){
    let jogarNovamente = prompt('Deseja jogar novamente? \n1 - Sim \n2 - Não');
    if(jogarNovamente == 1){
        jogar();
    }
    else if(jogarNovamente == 2){
        alert('Obrigado por jogar');
    }
    else{
        alert('Opção inválida');
    }
}