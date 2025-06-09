import gerarDiaDaSemana from "./gerarDiaDaSemana.js"
const inputItem = document.getElementById("input-item")
let contador = 0

export function criarItemDaLista() {
    if (inputItem.value === '') {
        alert('Por favor, insira um item')
        return
    }

    const itemDaLista = document.createElement('li')
    const containerItemDaLista = document.createElement('div')
    containerItemDaLista.classList.add('lista-item-container')
    const inputCheckbox = document.createElement('input')
    inputCheckbox.type = 'checkbox'
    inputCheckbox.id = "checkbox-" + contador++
    const nomeItem = document.createElement("p")
    nomeItem.innerText = inputItem.value

    inputCheckbox.addEventListener('click', function () {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = 'line-through'
        } else {
            nomeItem.style.textDecoration = 'none'
        }
    })

    containerItemDaLista.appendChild(inputCheckbox)
    containerItemDaLista.appendChild(nomeItem)

    itemDaLista.appendChild(containerItemDaLista)

    const dataCompleta = gerarDiaDaSemana()

    const textoData = document.createElement('p')
    textoData.classList.add('texto-data')
    textoData.innerText = dataCompleta
    itemDaLista.appendChild(textoData)

    return itemDaLista;
}