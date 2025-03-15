let amigos = [];

function adicionarAmigo() {
    const inputNome = document.getElementById("amigo");
    const nome = inputNome.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    inputNome.value = "";
    exibirAmigos();
}

function exibirAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa lista antes de atualizar

    amigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione pelo menos um nome.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Mostra resultado no <ul id="resultado">
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpa resultados anteriores

    const itemResultado = document.createElement("li");
    itemResultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
    resultadoLista.appendChild(itemResultado);

    // Remove da lista
    amigos.splice(indiceSorteado, 1);

    // Atualiza visualmente a lista de amigos
    exibirAmigos();
}
