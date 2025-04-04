import ui from './ui.js'
import api from './api.js'

document.addEventListener('DOMContentLoaded', () => {
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
        await api.salvarPensamento({
            conteudo,
            autoria
        })
        ui.renderizarPensamentos()
        ui.limparCamposForm()
    } catch (error) {
        limparCamposForm()
        alert('Erro ao salvar pensamento')
        throw error
    }
}

function manipularCancelamento() {
    ui.limparCamposForm()
}