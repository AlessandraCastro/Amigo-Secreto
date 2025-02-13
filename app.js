//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let inputNome = document.getElementById("nomeAmigo");
    let nome = inputNome.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    inputNome.value = ""; // Limpa o campo após a adição

    console.log(amigos); // Exibe a lista atualizada no console
    
}
function exibirAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach((amigo) => {  // Para cada amigo no array...
        const item = document.createElement("li"); // Cria um <li>
        item.textContent = amigo; // Define o nome como texto do <li>
        lista.appendChild(item); // Adiciona à lista
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione pelo menos um nome.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
    const amigoSorteado = amigos[indiceSorteado]; // Obtém o nome correspondente

    document.getElementById("resultadoSorteio").innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
