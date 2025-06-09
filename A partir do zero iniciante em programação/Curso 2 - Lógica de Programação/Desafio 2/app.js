function olaMundo(){
    console.log('Olá, mundo')
}
olaMundo() //1

function olaNome(nome){
    console.log('Olá, ' + nome)
}
olaNome(prompt('Qual o seu nome?')) //2

function dobrarNum(num){
    console.log(num * 2)
}
dobrarNum(prompt('Digite um número')) //3

function mediaNum(num1, num2, num3){
    let media = (parseInt(num1) + parseInt(num2) + parseInt(num3)) /3
    console.log('A média é: ' + media)
    alert('A média é: ' + media)
}

let num1 = prompt('Digite o primeiro número')
let num2 = prompt('Digite o segundo número')
let num3 = prompt('Digite o terceiro número')
mediaNum(num1, num2, num3) //4

function maiorMenor(numero1, numero2){
    let maior = numero1 > numero2 ? 'O maior é: ' + numero1 : 'O maior é: ' + numero2
    console.log(maior)
    alert(maior)
}

let numero1 = prompt('Insira o Primeiro Número')
let numero2 = prompt('Insira o Segundo Número')
maiorMenor(numero1, numero2) //5

function numeroMulti(numero) {
    return numero * numero
}
let numero = prompt('Digite um número')
let funcNum = numeroMulti(numero)
console.log(funcNum)
alert(funcNum) //6