let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    if(amigo.value == ''){
        alert('Digite um nome válido');
        return;
    }
    
    if(amigos.includes(amigo.value)){
        alert('Amigo já adicionado');
        return;
    }

    let lista = document.getElementById('lista-amigos');
    if(amigos.includes(amigo.value)){
        alert('Amigo já adicionado');
    } else{
    amigos.push(amigo.value)
    if(lista.textContent == ''){
        lista.textContent = amigo.value;
    } else{
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = null;
}
}

function sortear(){
    if(amigos.length < 4){
        alert('Adicione no mínimo 4 amigos');
        return;
    }
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for(let i = 0; i < amigos.length; i++){
        if(i == amigos.length - 1){
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' tirou ' + amigos[0] + '<br>';
        }
        else{
       sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' tirou ' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    let listaAmigos = document.getElementById('lista-amigos');
    let listaSorteio = document.getElementById('lista-sorteio');
    listaAmigos.textContent = '';
    listaSorteio.textContent = '';
}

