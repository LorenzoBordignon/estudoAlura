alert('Bem Vindo ao Aplicativo Contador')
let contador = 1;

while(contador < 10){
    alert('O contador está em ' + contador)
    contador++
}

if(contador = 10){
    alert("O contador finalmente chegou em 10")
}


alert('Bem Vindo ao Aplicativo Contador Inverso')
let contadorInverso = 10;

while(contadorInverso > 0){
    alert('O contador inverso está em ' + contadorInverso)
    contadorInverso--
}

if(contadorInverso < 1){
    alert("O contador finalmente chegou em 0")
}


alert('Bem vindo ao Aplicativo de Contagem Regressiva')
let contagemRegressiva = prompt('Escolha um número para começar a contagem')

while(contagemRegressiva > 0){
    alert('A contagem regressiva está em ' + contagemRegressiva)
    contagemRegressiva--
}

if(contagemRegressiva < 1){
    alert('A contagem acabou')
}


alert('Bem vindo ao Aplicativo de Contagem Progressiva')
let contagem = prompt('Escolha um número para terminar a contagem')
let contagemProgressiva = 1;

while(contagemProgressiva < contagem){
    alert('A contagem progressiva está em ' + contagemProgressiva)
    contagemProgressiva++
}

if(contagemProgressiva == contagem){
    alert('A contagem acabou em ' + contagem)
}

