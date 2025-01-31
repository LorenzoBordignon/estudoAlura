// function calculoImc(peso, altura){
//     let imc = peso / (altura * altura)
//     return imc
// }

// let peso = parseFloat((prompt('Digite seu peso')))
// let altura = parseFloat((prompt('Digite sua altura')))    

// let imc = calculoImc(peso, altura)
// alert(imc)      -1.1

// function olaNome(nome){
//     alert('Olá, ' + nome)
// } -1.0

// let nome = prompt('Insira seu nome')
// olaNome(nome)    -2.0

// function calcularFatorial(numeroFatorial){
//     return numeroFatorial * 4 * 3 * 2 * 1
// }

// let fatorial = calcularFatorial(5)
// alert(fatorial)   -2.1

// function dobrarNum(numero){
//     let dobro = numero * 2
//     alert(dobro)
// }

// let numero = prompt('Digite um número')
// dobrarNum(numero)  -3.0

// function conversorDolar(dolar) {
//     return dolar * 4.80
// }

// let dolar = parseInt(prompt('Insira quantos dólares você tem'))
// let real = conversorDolar(dolar)
// alert('Você tem ' + real + ' reais convertidos') - 3.1

// function calcularMedia(num1, num2, num3){
//     return (num1 + num2 + num3) / 3
// }

// let num1 = parseInt(prompt('Insira o primeiro número'))
// let num2 = parseInt(prompt('Insira o segundo número'))
// let num3 = parseInt(prompt('Insira o terceiro número'))

// let media = calcularMedia(num1, num2, num3)
// alert(media)     -4.0


// function areaRetangulo(altura, largura){
//     return altura * largura
// }

// function perimetroRetangulo(altura, largura){
//     return altura + largura + altura + largura
// }

// let altura = parseInt(prompt('Insira a altura da sala'))
// let largura = parseInt(prompt('Insira a largura da sala'))
// let area = areaRetangulo(altura, largura)
// let perimetro = perimetroRetangulo(altura, largura)

// alert('A área da sala é ' + area + ' e o perímetro é ' + perimetro)  -4.1

// function areaCirculo(raio, pi){
//     return pi * (raio * raio);
// }

// function perimetroCirculo(raio, pi){
//     return 2 * (pi * raio);
// }

// let pi = 3.14;
// let raio = parseInt(prompt(`Insira o valor do raio do circulo`));

// area = areaCirculo(raio, pi);
// perimetro = perimetroCirculo(raio, pi);

// alert(`A area do circulo e: ` + area + ` e o perimetro e: ` + perimetro) -5.0



// function tabuadaNum(numero){
//     let i = 0;
//     while(i != 10){
//         i++
//         let resultado = numero * i;
//         console.log(numero + ` x ` + i + ` = ` + resultado)
//     }
// }

// let numero = parseInt(prompt(`Insira o numero`))
// tabuadaNum(numero)   -6.0



// function calcularDesconto(preco, desconto, desconto10, desconto20){
// if(preco >= 500){
//     desconto = preco * desconto20;
// } else if(preco >= 200){
//     desconto = preco * desconto10;
// } else{
//     desconto = 0;
// }
// (alert(`O preco final e R$` + (preco - desconto)));
// }

// let preco = parseInt(prompt(`Insira o valor do Produto`));
// let desconto20 = 0.20;
// let desconto10 = 0.10;
// let desconto = 0;
// calcularDesconto(preco, desconto, desconto10, desconto20);  -ex



// function idadeParaDias(idade){
// alert(idade * 365);
// }

// let idade = parseInt(prompt(`Insira sua idade`))
// idadeParaDias(idade)



// function calcularPotencia(base, expoente){
// alert(base ** expoente)
// }

// let base = parseInt(prompt(`Insira a base`))
// let expoente = parseInt(prompt(`Insira o expoente`))
// calcularPotencia(base, expoente)  -ex

// function contadorNumerico(numeroInicio, numeroFinal){
//     let contador = []
//     for(let i = numeroInicio; i <= numeroFinal; i++){
//         contador.push(i)
//         console.log('A contagem está em ' + i)
//     }
// }

// let numeroInicio = parseInt(prompt('Insira o número inicial'))
// let numeroFinal = parseInt(prompt('Insira o número final'))
// contadorNumerico(numeroInicio, numeroFinal) --ex
