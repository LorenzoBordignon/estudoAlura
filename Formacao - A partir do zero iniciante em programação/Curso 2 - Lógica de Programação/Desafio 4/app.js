// let listaGenerica = []

// let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']
// console.log(linguagensDeProgramacao)
// linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang')
// console.log(linguagensDeProgramacao)

function iniciarJogo(simNao){
    if (simNao === 'sim'){
        let nome1 = prompt('Insira o primeiro nome')
        let nome2 = prompt('Insira o segundo nome')
        let nome3 = prompt('Insira o terceiro nome')
        let nomesAleatorios = [nome1, nome2, nome3]
        console.log(nomesAleatorios[0])
        console.log(nomesAleatorios[1])
        console.log(nomesAleatorios[nomesAleatorios.length - 1])
    } else{if(simNao === 'nao'){
        console.log('Que pena! ):')
    } else{ console.log('Por favor, insira sim ou nao')}}
}

let simNao = prompt('Deseja jogar?(sim - nao)')
iniciarJogo(simNao)

