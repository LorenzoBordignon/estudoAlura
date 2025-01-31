alert(`Bem vindo ao Jogo!`)
let diaDaSemana = prompt(`Qual o dia da semana?`)
if (diaDaSemana == `Domingo` || diaDaSemana == `Sábado`){
    alert('Bom Final de Semana!')
}
else{
    alert(`Boa Semana!`)
}

/* ---Código que identifica o dia da semana independente de letra maiúscula ou minúscula, além disso, se não for inserido o dia corretamente, ele retornará um erro---

alert(`Bem vindo ao Jogo!`);
let diaDaSemana = prompt(`Qual o dia da semana?`).toLowerCase();
if (diaDaSemana === `domingo` || diaDaSemana === `sábado`){
    alert('Bom Final de Semana!');
} else if (["segunda", "terça", "quarta", "quinta", "sexta"].includes(diaDaSemana)) {
    alert(`Boa Semana!`);
} else {
    alert(`Dia da semana inválido. Por favor, tente novamente.`);
}
*/

alert(`Bem vindo ao jogo: Positivo ou Negativo!`)
let numero = prompt('Escolha um Número(Negativo ou Positivo)')
if (numero > 0){
    alert(`Número Positivo!`)
}
else{
    alert(`Número Negativo!`)
}

alert(`Bem vindo ao Sistema de Pontuação`)
let pontuacao = prompt(`Qual a sua pontuação?`)
if(pontuacao >= 100){
    alert(`Parabéns, você venceu`)
}
else{
    alert(`Tente novamente para ganhar, você alcançou ` + pontuacao + ` pontos.`)
}

let saldo = 10000
alert(`O saldo na sua conta é de ` + saldo + ` reais`)

let nome = prompt(`Qual o seu nome?`)
alert(`Seja bem vindo(a) ` + nome + `.`)
