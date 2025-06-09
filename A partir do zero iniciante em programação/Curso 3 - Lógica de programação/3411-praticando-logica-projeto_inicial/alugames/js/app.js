let currentRentedGame = null;
let rentalCounts = {
    "Monopoly": 0,
    "Ticket to Ride": 0,
    "Takenoko": 0
};
let totalRentals = 0;

const gameNames = {
    1: "Monopoly",
    2: "Ticket to Ride",
    3: "Takenoko"
};

function alterarStatus(id) {
    let button = document.querySelector(`#game-${id} .dashboard__item__button`);
    let img = document.querySelector(`#game-${id} .dashboard__item__img`);
    let gameName = gameNames[id];
    
    if (button.textContent === "Alugar") {
        if (currentRentedGame !== null) {
            alert("Você já alugou um jogo. Por favor, devolva o jogo atual antes de alugar outro.");
            return;
        }
        button.textContent = "Devolver";
        button.classList.add("dashboard__item__button--return");
        img.classList.add("dashboard__item__img--rented");
        currentRentedGame = id;
        rentalCounts[gameName]++;
        totalRentals++;
        let vezes = rentalCounts[gameName] === 1 ? "vez" : "vezes";
        console.log(`O jogo ${gameName} foi alugado ${rentalCounts[gameName]} ${vezes}. Total de jogos alugados: ${totalRentals}`);
        alert("Boa diversão! Se quiser alugar outro jogo, por favor, devolva o atual.");
    } else {
        confirmarDevolucao()
        button.textContent = "Alugar";
        button.classList.remove("dashboard__item__button--return");
        img.classList.remove("dashboard__item__img--rented");
        currentRentedGame = null;
    }
}

// Inicializar o estado de todos os jogos como disponíveis para alugar
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll('.dashboard__item__button');
    buttons.forEach(button => {
        button.textContent = "Alugar";
        button.classList.remove("dashboard__item__button--return");
    });

    let imgs = document.querySelectorAll('.dashboard__item__img');
    imgs.forEach(img => {
        img.classList.remove("dashboard__item__img--rented");
    });
});

function confirmarDevolucao(){
    if (confirm("Deseja realmente devolver o jogo?")) {
        alert("O jogo foi devolvido com sucesso!");
    }
}