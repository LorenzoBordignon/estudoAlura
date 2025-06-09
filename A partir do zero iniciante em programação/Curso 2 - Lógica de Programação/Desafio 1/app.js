let titulo = document.querySelector("h1")
titulo.innerHTML  = ("Hora do Desafio")

function consolePressionado() {
    console.log("O botão console foi pressionado")
}

function alertaPressionado(){
    if(alertaPressionado){
        alert("Eu amo JS")
    } 
}

function promptPressionado(){
    let cidade = prompt("DIgite o nome de uma cidade brasileira")
    alert("Estive em " + cidade + " e lembrei de você")
}

function somaPressionado(){
    let num1 = parseInt(prompt("Digite um número"))
    let num2 = parseInt(prompt("Digite outro número"))

    let soma = parseInt(num1 + num2)

    alert(`A soma entre ${num1} e ${num2} é: ${soma}`)
}