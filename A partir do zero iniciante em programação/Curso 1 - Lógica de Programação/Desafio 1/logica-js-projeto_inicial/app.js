alert("Boas vindas ao nosso site!");
/* let name = "Lua";
let idade = 25 ;
let numeroDeVendas = 50;
let saldoDisponível = 1000;
let mensagemDeErro = "Erro! Preencha todos os campos.";
alert(mensagemDeErro);
*/

let nome = prompt("Qual o seu nome?")
let idade2 = prompt("Digite a sua idade")
if(idade2 >= 18) {
    alert("Você pode tirar a habilitação, " + nome)
}
else{
    alert("Você não pode tirar a habilitação, " + nome)
}