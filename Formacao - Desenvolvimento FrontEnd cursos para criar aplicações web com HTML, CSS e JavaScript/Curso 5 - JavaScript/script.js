const html = document.querySelector('html')
const botaoFoco = document.querySelector('.app__card-button--foco')
const botaoDescansoCurto = document.querySelector('.app__card-button--curto')
const botaoDescansoLongo = document.querySelector('.app__card-button--longo')
const imagemPrincipal = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const botaoComecar = document.getElementById('start-pause')
const inputMusicaFoco = document.getElementById('alternar-musica')
const imagemBotao = document.getElementById('img-start-pause')
const textoBotao = document.getElementById('span-start-pause')
const tempoNaTela = document.getElementById('timer')
const div = document.getElementById('app__card')
const tela = document.querySelector('html')

const musica = new Audio('/sons/luna-rise-part-one.mp3')
const somPause = new Audio('/sons/pause.mp3')
somPause.volume = 0.3
const somPlay = new Audio('/sons/play.wav')
somPlay.volume = 0.3
const somFimContagem = new Audio('/sons/beep.mp3')
somFimContagem.volume = 0.2

let tempoDecorridoEmSegundos = 1500
tempoDecorridoEmSegundos.toFixed
let intervaloId = null

musica.loop = true
inputMusicaFoco.addEventListener('change', () => {
    if (musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})

botaoFoco.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500
    alterarContexto('foco')
    botaoFoco.classList.add('active')
})

botaoDescansoCurto.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300
    alterarContexto('descanso-curto')
    botaoDescansoCurto.classList.add('active')
})

botaoDescansoLongo.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900
    alterarContexto('descanso-longo')
    botaoDescansoLongo.classList.add('active')
})

function alterarContexto(contexto) {
    colocarTempoNaTela()
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    imagemPrincipal.setAttribute('src', `/imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos == 0) {
        somFimContagem.play()
        alert('Fim da Contagem, Volte ao Foco!')
        zerar()
        return;
    } else {
        tempoDecorridoEmSegundos -= 1
        colocarTempoNaTela()
    }
}

botaoComecar.addEventListener('click', iniciarOuPausarContagem)

function iniciarOuPausarContagem() {
    if (intervaloId) {
        somPause.play()
        textoBotao.textContent = 'Começar'
        imagemBotao.setAttribute('src', '/imagens/play_arrow.png')
        zerar()
        return
    }
    somPlay.play()
    div.style.animation = 'rodar 3s linear infinite both'
    textoBotao.textContent = 'Pausar'
    imagemBotao.setAttribute('src', '/imagens/pause.png')
    intervaloId = setInterval(contagemRegressiva, 1000)
}

function zerar() {
    clearInterval(intervaloId)
    intervaloId = null
}

function colocarTempoNaTela() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {
        minute: '2-digit',
        second: '2-digit'
    })
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

colocarTempoNaTela()