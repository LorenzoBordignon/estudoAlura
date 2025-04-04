import api from "./api.js"
const ui = {
    async renderizarPensamentos() {
        const listaPensamentos = document.getElementById('lista-pensamentos')
        try {
            const pensamentos = await api.buscarPensamentos()
            pensamentos.forEach(ui.adicionarPensamentoNaLista)
        } catch (error) {
            alert('Erro ao renderizar pensamentos.')
            throw error;
        }
    },
    adicionarPensamentoNaLista(pensamento) {
        const listaPensamentos = document.getElementById('lista-pensamentos')
        const li = document.createElement('li')
        li.setAttribute('data-id', pensamento.id)
        li.classList.add('li-pensamento')

        const iconeAspas = document.createElement('img')
        iconeAspas.setAttribute('src', 'assets/imagens/aspas-azuis.png')
        iconeAspas.setAttribute('alt', 'Aspas azuis')
        iconeAspas.classList.add('icone-aspas')

        const pensamentoConteudo = document.createElement('div')
        pensamentoConteudo.textContent = pensamento.conteudo
        pensamentoConteudo.classList.add('pensamento-conteudo')

        const pensamentoAutoria = document.createElement('div')
        pensamentoAutoria.textContent = pensamento.autoria
        pensamentoAutoria.classList.add('pensamento-autoria')

        li.appendChild(iconeAspas)
        li.appendChild(pensamentoConteudo)
        li.appendChild(pensamentoAutoria)
        listaPensamentos.appendChild(li)
    },
    limparCamposForm() {
        // const conteudo = document.getElementById('pensamento-conteudo')
        // const autoria = document.getElementById('pensamento-autoria')
        // conteudo.value = ''
        // autoria.value = ''
        document.getElementById('pensamento-form').reset()
    }
}

export default ui