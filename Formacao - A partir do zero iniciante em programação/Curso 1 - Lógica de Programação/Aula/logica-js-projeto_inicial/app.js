alert('Boas Vindas ao jogo do número secreto');
console.log('Jogo Iniciado');

let limiteNumerico = parseInt(prompt("Até que número deseja jogar?"))
let numeroSecreto = parseInt(Math.random() * limiteNumerico + 1);
console.log('O numero secreto é ' + numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${limiteNumerico}`);

    if (chute == numeroSecreto) {
        break;
        
    }else{
        if(chute > numeroSecreto){
            alert('O número secreto é menor que ' + chute);
        } else{
            alert('O número secreto é maior que ' + chute);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso aí! Você descobriu o número secreto(${numeroSecreto}) com ${tentativas} ${palavraTentativa}.`);

/*
if(tentativas > 1){
alert(`Isso aí! Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
} else{
    alert(`Isso aí! Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
}
*/