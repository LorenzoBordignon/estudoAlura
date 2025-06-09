function gerarDiaDaSemana() {
    const diaDaSemana = new Date().toLocaleDateString('pt-Br', {
        weekday: 'long'
    })
    const data = new Date().toLocaleDateString('pt-br')
    const hora = new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit'
    })
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`

    return dataCompleta;
}

export default gerarDiaDaSemana;