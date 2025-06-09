import ui from './ui.js'
import api from './api.js'

document.addEventListener('DOMContentLoaded', () => {
    ui.verificarListaVazia()
    ui.renderizarPensamentos()

    const formularioPensamento = document.getElementById('pensamento-form')
    const botaoCancelarForm = document.getElementById('botao-cancelar')
    formularioPensamento.addEventListener('submit', manipularSubmissaoFormulario)
    botaoCancelarForm.addEventListener("click", manipularCancelamento)
})

async function manipularSubmissaoFormulario(event) {
    event.preventDefault()
    const id = document.getElementById('pensamento-id').value
    const conteudo = document.getElementById('pensamento-conteudo').value
    const autoria = document.getElementById('pensamento-autoria').value

    try {
        if (id) {
            await api.editarPensamento({
                id,
                conteudo,
                autoria
            })
        } else {
            await api.salvarPensamento({
                conteudo,
                autoria
            })
        }
        ui.renderizarPensamentos()
        ui.limparCamposForm()
    } catch (error) {
        alert('Erro ao salvar pensamento')
        throw error
    }
}

function manipularCancelamento() {
    ui.limparCamposForm()
}