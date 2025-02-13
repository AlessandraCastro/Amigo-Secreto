Sorteador de Amigos

Este projeto é uma aplicação simples em JavaScript que permite adicionar amigos a uma lista, exibi-los, removê-los e sortear um amigo aleatoriamente.

🚀 Funcionalidades

Adicionar amigos à lista

Exibir a lista de amigos

Remover amigos da lista

Sortear um amigo aleatório

📋 Como Usar

Adicionar um amigo: Digite um nome no campo de entrada e clique no botão para adicioná-lo à lista.

Exibir a lista de amigos: A lista será automaticamente atualizada sempre que um amigo for adicionado ou removido.

Remover um amigo: Clique no botão "❌" ao lado do nome para removê-lo.

Sortear um amigo: Clique no botão de sorteio para escolher aleatoriamente um nome da lista.

🛠️ Tecnologias Utilizadas

HTML

CSS (opcional, para estilização)

JavaScript puro (Vanilla JS)

📄 Código Principal



let amigos = [];

function adicionarAmigo() {
    let inputNome = document.getElementById("nomeAmigo");
    let nome = inputNome.value.trim();

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

🏗️ Estrutura do Projeto

📂 projeto-amigos
│-- index.html    # Estrutura do HTML
│-- styles.css    # Estilização (opcional)
│-- script.js     # Código JavaScript
│-- README.md     # Documentação
│-- codigo.png    # Imagem do código

![Captura de tela 2025-02-12 224005](https://github.com/user-attachments/assets/b81f73c0-24fd-466b-a2cc-4a41540d3612)




