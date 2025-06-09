console.log("Boas-Vindas"); //1

let nome = prompt("Qual o seu nome?");
console.log("Olá, " + nome); //2

alert("Olá, " + nome); //3

let linguagemProgramacao = prompt("Qual a sua linguagem de programação favorita " + nome + "?")
console.log("A linguagem de programação favorita do " + nome + " é " + linguagemProgramacao); 
alert("A linguagem de programação favorita do " + nome + " é " + linguagemProgramacao); //4

let valor1 = parseInt(prompt("Insira um número, " + nome));
let valor2 = parseInt(prompt("Insira outro número, " + nome));
let resultadoMais = (valor1 + valor2);
let resultadoMenos = (valor1 - valor2);

console.log(nome + ", a soma de " + valor1 + " + " + valor2 + " é " + resultadoMais)
alert(nome + ", a soma de " + valor1 + " + " + valor2 + " é " + resultadoMais) //5

console.log(nome + ", a diferença entre " + valor1 + " e " + valor2 + " é " + resultadoMenos)
alert(nome + ", a diferença entre " + valor1 + " e " + valor2 + " é " + resultadoMenos) //6 


let idade = prompt("Insira sua idade, " + nome)
let textoIdade = idade >= 18 ? "maior" : "menor"
console.log(nome + `, você é ${textoIdade} de idade`)
alert(nome + `, você é ${textoIdade} de idade`) //7

let numero = prompt("Insira um número")
if(numero > 0){
    alert(nome + ", esse é um número positivo")
    console.log(nome + ", esse é um número positivo")
}
else if(numero == 0){
    alert(nome + ", 0 é neutro, nem negativo nem positivo")
    console.log(nome + ", 0 é neutro, nem negativo nem positivo")
}
else{
    alert(nome + ", esse é um número negativo")
    console.log(nome + ", esse é um número negativo")
} //8

alert("Boas-Vindas ao Contador Númerico")
let geradorNumeroInicial = parseInt(prompt("Insira um número pra iniciar a contagem"));
let geradorNumero = parseInt(prompt("Insira um número para terminar a contagem"));

while(geradorNumeroInicial < geradorNumero){
    console.log("A contagem numérica está em " + geradorNumeroInicial)
    geradorNumeroInicial++
}
if(geradorNumeroInicial == geradorNumero){
    console.log("A contagem terminou em " + geradorNumeroInicial)
    alert("A contagem terminou em " + geradorNumeroInicial)
} //9

let nota = prompt(`Qual a sua nota ${nome}?`)
if(nota >= 7){
    console.log(`Parabéns ${nome}, você alcançou a média`)
    alert(`Parabéns ${nome}, você alcançou a média`)
}else{
    alert(`${nome}, infelizmente você não alcançou a média`)
    console.log(`${nome}, infelizmente você não alcançou a média`)
} //10

let numeroAleatorio = Math.random()
alert("Um número aleatório: " + numeroAleatorio)
console.log("Um número aleatório: " + numeroAleatorio) //11

let numeroInteiro = parseInt(Math.random() * 10 + 1)
alert("Um número aleatório entre 1 e 10: " + numeroInteiro)
console.log("Um número aleatório entre 1 e 10: " + numeroInteiro) //12

let numeroInteiro2 = parseInt(Math.random() *1000 + 1)
alert("Um número aleatório entre 1 e 1000: " + numeroInteiro2)
console.log("Um número aleatório entre 1 e 1000: " + numeroInteiro2) //13