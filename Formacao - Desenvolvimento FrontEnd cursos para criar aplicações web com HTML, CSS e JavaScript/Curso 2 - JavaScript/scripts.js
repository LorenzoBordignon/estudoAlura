const uploadBtn = document.getElementById('upload-btn') //botão de carregar imagem
const inputUpload = document.getElementById('image-upload') //input tipo arquivo

uploadBtn.addEventListener('click', () => {
    inputUpload.click() //quando o botão de carregar imagem for clicado, acionará o input tipo arquivo, abrindo o explorador
})

function lerConteudoDoArquivo(arquivo) { //declarando uma função para ler o conteúdo do arquivo
    return new Promise((resolve, reject) => { //retorna uma nova instância do objeto promise, função de callback
        const leitor = new FileReader() //determina a variável leitor como uma leitura de arquivo de forma assíncrona
        leitor.onload = () => { //se o arquivo for carregado com sucesso, este evento será iniciado
            resolve({ //ao ter o arquivo carregado com sucesso, a promise será resolvida com resolve() e dará início a função
                url: leitor.result, //propriedade(url) dentro da promise que vai ser retornada obtendo o endereço para a imagem
                nome: arquivo.name //propriedade(nome) dentro da promise que vai ser retornada obtendo o nome do arquivo
            })
        }
        leitor.onerror = () => { //se o arquivo não conseguir ser carregado com sucesso, dará início a esta função
            reject(`Erro na leitura do arquivo`) //a promise irá retornar reject contendo a string inserida
        }

        leitor.readAsDataURL(arquivo) //lê o arquivo e converte em uma representação de dados URL(data URL)
    })
}

const imagemPrincipal = document.querySelector('.main-imagem') //seleciona a imagem na tela, no momento é a de exemplo
const nomeDaImagem = document.querySelector('.container-imagem-nome p') //seleciona o texto que irá aparecer o nome da imagem

inputUpload.addEventListener('change', async (evento) => { //escuta se a imagem foi alterada e inicia um evento assíncrono
    const arquivo = evento.target.files[0] //seleciona o elemento input no DOM e entra nos arquivos selecionando o primeiro([0])

    if (arquivo) { //se o arquivo existir(true) será iniciada a condicional
        try { //tentar executar a caixa abaixo
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo)
            imagemPrincipal.src = conteudoDoArquivo.url
            nomeDaImagem.textContent = conteudoDoArquivo.nome
        } catch (erro) { //caso não consiga executar, retorne um erro
            console.error("Erro na leitura do arquivo") //tratamento do erro acima
        }
    }
})

const inputTags = document.getElementById('input-tags')
const listaTags = document.getElementById('lista-tags')

listaTags.addEventListener('click', (evento) => {
    if (evento.target.classList.contains("remove-tag")) {
        const tagQueQueremosRemover = evento.target.parentElement
        listaTags.removeChild(tagQueQueremosRemover)
    }
})

const tagsDisponiveis = ["Front-End", "Programação", "Data Science", "Full-stack", "HTML", "CSS", "JavaScript"]

async function verificarTagsDisponiveis(tagTexto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tagsDisponiveis.includes(tagTexto))
        }, 1000)
    })
}

inputTags.addEventListener('keypress', async (evento) => {
    if (evento.key === 'Enter') {
        evento.preventDefault()
        const tagTexto = inputTags.value.trim()
        if (tagTexto !== '') {
            try {
                const tagExiste = await verificarTagsDisponiveis(tagTexto)
                if (tagExiste) {
                    const tagNova = document.createElement('li')
                    tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag">`
                    listaTags.appendChild(tagNova)
                    inputTags.value = ""
                } else {
                    console.log("A tag não foi encontrada")
                }
            } catch (error) {
                console.error('Erro ao verificar a existência da tag')
            }
        }
    }
})

const botaoPublicar = document.querySelector('.botao-publicar')

async function publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsProjeto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deuCerto = Math.random() > 0.5
            if (deuCerto) {
                resolve('Projeto publicado com sucesso!')
            } else {
                reject('Ocorreu um erro ao publicar o projeto.')
            }
        }, 2000)
    })
}

botaoPublicar.addEventListener('click', async (evento) => {
    evento.preventDefault()
    const nomeDoProjeto = document.getElementById('nome').value
    const descricaoDoProjeto = document.getElementById('descricao').value
    const tagsProjeto = Array.from(listaTags.querySelectorAll('p')).map((tag) => tag.textContent)
    try {
        const resultado = await publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsProjeto)
        console.log(resultado)
    } catch (error) {
        console.log('Deu errado, ' + error)
    }
})

const botaoDescartar = document.querySelector('.botao-descartar')
botaoDescartar.addEventListener("click", (evento) => {
    evento.preventDefault()
    const formulario = document.querySelector('form')
    formulario.reset()
    imagemPrincipal.src = './img/imagem1.png'
    nomeDaImagem.textContent = 'image_projeto.png'
    listaTags.innerHTML = ''
})