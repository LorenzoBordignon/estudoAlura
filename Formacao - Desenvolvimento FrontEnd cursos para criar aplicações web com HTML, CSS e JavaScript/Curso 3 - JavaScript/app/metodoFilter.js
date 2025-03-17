const botoes = document.querySelectorAll('.btn') //array-like
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros)) //para cada elemento do array, adicione um ouvinte de clique

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id) //this - refere-se ao elemento que disparou o evento(btn)
    const categoria = elementoBtn.value
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)

}