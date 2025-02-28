const inputNome = document.getElementById('nome');
const btnEnviar = document.getElementsByClassName('btn')[0];
const btnLimpar = document.getElementById('btn-limpar')
const listaNomes = document.getElementsByClassName('lista-nomes')[0];


btnEnviar.addEventListener("click", (enviar) => {
    enviar.preventDefault();
    if (verificarNome() == true) {
        const listaVazia = document.getElementById('lista-vazia')
        listaVazia.classList.add('lista__nome-vazia');
        const nomeNaLista = document.createElement('li');
        const nome = document.createElement('p');
        nome.classList.add('nomeNaLista');
        nome.innerText = inputNome.value;

        nomeNaLista.appendChild(nome);
        listaNomes.appendChild(nomeNaLista);
    }
    limparInput()
})

btnLimpar.addEventListener('click', (limpar) => {
    limpar.preventDefault()
    if (listaNomes) {
        listaNomes.innerHTML = '';
    }
    const listaVazia = document.getElementById('lista-vazia')
    if (listaVazia) {
        listaVazia.classList.remove('lista__nome-vazia')
    } else {
        const novaListaVazia = document.createElement('li')
        novaListaVazia.classList.add('nomeNaLista')
        novaListaVazia.id = ('lista-vazia')
        const textoListaVazia = document.createElement('p')
        textoListaVazia.innerText = 'Nenhum nome inserido.'
        novaListaVazia.appendChild(textoListaVazia)
        listaNomes.appendChild(novaListaVazia)
    }
})

function verificarNome() {
    const textoInput = inputNome.value.trim();
    if (textoInput === '') {
        alert('Campo nome é inválido (vazio)');
        return false;
    }
    if (!isNaN(textoInput)) {
        alert('Campo nome é inválido (número)');
        return false;
    }
    return true;
}

function limparInput() {
    inputNome.value = ''
}