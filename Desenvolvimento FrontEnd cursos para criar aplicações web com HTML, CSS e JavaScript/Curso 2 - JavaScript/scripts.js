const uploadBtn = document.getElementById('upload-btn') //botão de carregar imagem
const inputUpload = document.getElementById('image-upload') //input tipo arquivo que vai ser chamado na função abaixo

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

inputUpload.addEventListener('change', async (evento) => { //escuta se a imagem foi alterada e inicia uma função assíncrona
    const arquivo = evento.target.files[0] //seleciona o elemento input no DOM e entra nos arquivos selecionando o primeiro([0])

    if (arquivo) { //se o arquivo existir(true) será iniciada a condicional
        try { //tentar executar a caixa abaixo
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo) //espera o resultado da função ser resolvido(await)
            imagemPrincipal.src = conteudoDoArquivo.url //preenche o source da imagem com o retorno da função(url img)
            nomeDaImagem.textContent = conteudoDoArquivo.nome //preenche o texto do p com o retorno da função(nome p)
        } catch (erro) { //caso não consiga executar, retorne um erro
            console.error("Erro na leitura do arquivo") //tratamento do erro acima
        }
    }
})

const inputTags = document.getElementById('input-tags') //input das tags
const listaTags = document.getElementById('lista-tags') //lista(ul) onde as tags vão ser exibidas

listaTags.addEventListener('click', (evento) => { //selecionando o elemento pai(ul) para monitorar as ações dos itens(li)
    if (evento.target.classList.contains("remove-tag")) { //se o elemento filho(img) tiver essa classe, iniciará a condicional
        const tagQueQueremosRemover = evento.target.parentElement //variável como o elemento pai da img, no caso a li
        listaTags.removeChild(tagQueQueremosRemover) //remove a li que foi selecionada pelo target
    }
})

const tagsDisponiveis = ["Front-End", "Programação", "Data Science", "Full-stack", "HTML", "CSS", "JavaScript"] //array

async function verificarTagsDisponiveis(tagTexto) { //cria uma função assíncrona com a tag fornecida verificando o array
    return new Promise((resolve) => { //retorna um novo objeto promise que vai atuar apenas no caso de sucesso
        setTimeout(() => { //espera pelo tempo determinado após o código(função). Sintax - setTimeout(functionRef, delay)
            resolve(tagsDisponiveis.includes(tagTexto)) //retorno da promise se o array contém a tag digitada, booleano
        }, 1000) //tempo de espera da função setTimeout(), a partir desse tempo o código será executado
    })
}

inputTags.addEventListener('keypress', async (evento) => { //escuta acionamento de tecla, então executa a função assíncrona
    if (evento.key === 'Enter') { //se a tecla cujo disparou a função for exatamente igual ao Enter, executa o código seguinte
        evento.preventDefault() //previne o comportamento padrão da função, no caso, reiniciaria o formulário ou página
        const tagTexto = inputTags.value.trim() //valor inserido dentro do input sem espaços extras
        if (tagTexto !== '') { //se o valor digitado no input for diferente de nada(vazio) execute o código seguinte
            try { //tente
                const tagExiste = await verificarTagsDisponiveis(tagTexto) //espera o retorno da função para atribuílo na variável
                if (tagExiste) { //se a tag existir | true
                    const tagNova = document.createElement('li') //cria uma nova li no DOM e atribui ela a uma variável
                    tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag">` //insere elementos html dentro da li
                    listaTags.appendChild(tagNova) //afilia a li com a ul | adicionando um novo item na lista
                    inputTags.value = "" //limpa o campo de input
                } else { //se a tag não existir | false
                    console.log("A tag não foi encontrada") //exibe no cosole a mensagem digitada
                }
            } catch (error) { //caso não consiga executar a caixa try | exiba esse erro
                console.error('Erro ao verificar a existência da tag') //formata a mensagem do console como um
            }
        }
    }
})

const botaoPublicar = document.querySelector('.botao-publicar') //seleciona no DOM o botão publicar

async function publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsProjeto) { //cria uma função assíncrona que exige parâmetros
    return new Promise((resolve, reject) => { //a função irá retornar uma promessa
        setTimeout(() => { //define que o código na sequência terá um determinado tempo para ser executado
            const deuCerto = Math.random() > 0.5 //definição de uma simulação de busca de dados no servidor
            if (deuCerto) { //se deuCerto = true | execute este código
                resolve('Projeto publicado com sucesso!') //resolução da promise
            } else { //se deuCerto = false | execute este código
                reject('Ocorreu um erro ao publicar o projeto.') //rejeição da promise
            }
        }, 2000) //tempo determinado para executar a caixa de código
    })
}

botaoPublicar.addEventListener('click', async (evento) => { //adiciona um ouvinte assíncrono para o clique no botão publicar
    evento.preventDefault() //previne o comportamento padrão do browser / user agent
    const nomeDoProjeto = document.getElementById('nome').value //valor inserido no input nome é atribuído à nomeDoProjeto 
    const descricaoDoProjeto = document.getElementById('descricao').value //valor inserido no input é atribuído à descricaoDoProjeto
    //const tagsProjeto = ArrayDeP.map((p) => p.textContent)
    const tagsProjeto = Array.from(listaTags.querySelectorAll('p')).map(tag => tag.textContent) //explicação embaixo
    //Cria array real invés like|Seleciona todos os p dentro da ul|Realiza sua função|para cada tag exiba seu conteúdo de texto
    //                             (array-like)                  para cada elemento do 
    //                                                          array, criando um novo
    try { //tente
        const resultado = await publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsProjeto) //espera pelo retorno da função
        console.log(resultado) //exibe no console o retorno da função
    } catch (error) { //se ocorrer algum erro, trate-o seguindo o código abaixo
        console.log('Deu errado, ' + error) //exibe no console que houve um erro e o imprime logo em sequência
    }
})

const botaoDescartar = document.querySelector('.botao-descartar') //seleciona no DOM o botão de descartar
botaoDescartar.addEventListener("click", (evento) => { //ouvinte de evento para quando ocorrer um clique no botão descartar
    evento.preventDefault() //previne o comportamento padrão do browser / user agent
    const formulario = document.querySelector('form') //seleciona no DOM todo o formulário
    formulario.reset() //reinicia todos os campos-padrão do formulário(inputs, textareas, etc.)
    imagemPrincipal.src = './img/imagem1.png' //altera o endereço da imagem na tela para a padrão
    nomeDaImagem.textContent = 'image_projeto.png' //altera o texto do nome da imagem para o texto padrão
    listaTags.innerHTML = '' //limpa a ul listaTags
})