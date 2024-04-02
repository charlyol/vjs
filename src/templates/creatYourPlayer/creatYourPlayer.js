let players = [
    {
        name: "Verstappen",
        firstName: "Max",
        team: "Red Bull Racing",
        car: "RB20",
        brand: "Honda",
        age: 26,
        score: 0
    },
    {
        name: "Perez",
        firstName: "Sergio",
        team: "Red Bull Racing - Honda",
        car: "RB20",
        brand: "Honda",
        age: 34,
        score: 0
    },
    {
        name: "Hamilton",
        firstName: "Lewis",
        team: "Mercedes-AMG Petronas Formula One Team",
        car: "W15",
        brand: "Mercedes-AMG",
        age: 39,
        score: 0
    },
    {
        name: "Russell",
        firstName: "George",
        team: "Mercedes-AMG Petronas Formula One Team",
        car: "W15",
        brand: "Mercedes-AMG",
        age: 26,
        score: 0
    },
    {
        name: "Leclerc",
        firstName: "Charles",
        team: "Scuderia Ferrari",
        car: "SF-24",
        brand: "Ferrari",
        age: 25,
        score: 0
    },
    {
        name: "Sainz",
        firstName: "Carlos",
        team: "Scuderia Ferrari",
        car: "SF-24",
        brand: "Ferrari",
        age: 29,
        score: 0
    },
    {
        name: "Norris",
        firstName: "Lando",
        team: "McLaren F1 Team",
        car: "MCL38",
        brand: "Mclaren",
        age: 24,
        score: 0
    },
    {
        name: "Piastri",
        firstName: "Oscar",
        team: "McLaren F1 Team",
        car: "MCL38",
        brand: "Mclaren",
        age: 22,
        score: 0
    },
    {
        name: "Stroll",
        firstName: "Lance",
        team: "Aston Martin F1 Team",
        car: "AMR24",
        brand: "Aston Martin",
        age: 25,
        score: 0
    },
    {
        name: "Alonso",
        firstName: "Fernando",
        team: "Aston Martin F1 Team",
        car: "AMR24",
        brand: "Aston Martin",
        age: 42,
        score: 0
    },
    {
        name: "Ocon",
        firstName: "Esteban",
        team: "Alpine F1 Team",
        car: "A524",
        brand: "Alpine",
        age: 27,
        score: 0
    },
    {
        name: "Gasly",
        firstName: "Pierre",
        team: "Alpine F1 Team",
        car: "A524",
        brand: "Alpine",
        age: 28,
        score: 0
    },
    {
        name: "Albon",
        firstName: "Alexander",
        team: "Williams Racing",
        car: "FW46",
        brand: "Williams",
        age: 28,
        score: 0
    },
    {
        name: "Sargeant",
        firstName: "Logan",
        team: "Williams Racing",
        car: "FW46",
        brand: "Williams",
        age: 23,
        score: 0
    },
    {
        name: "Tsunoda",
        firstName: "Yuki",
        team: "Scuderia AlphaTauri - Honda",
        car: "VCARB 01",
        brand: "Honda",
        age: 23,
        score: 0
    },
    {
        name: "Ricciardo",
        firstName: "Daniel",
        team: "Scuderia AlphaTauri - Honda",
        car: "VCARB 01",
        brand: "Honda",
        age: 34,
        score: 0
    },
    {
        name: "Bottas",
        firstName: "Valtteri",
        team: "Alfa Romeo Racing",
        car: "C44",
        brand: "Alfa Romeo",
        age: 34,
        score: 0
    },
    {
        name: "Zhou",
        firstName: "Guanyu",
        team: "Alfa Romeo Racing",
        car: "C44",
        brand: "Alfa Romeo",
        age: 24,
        score: 0
    },
    {
        name: "Magnussen",
        firstName: "Kevin",
        team: "Haas F1 Team",
        car: "VF24",
        brand: "Haas",
        age: 31,
        score: 0
    },
    {
        name: "Hulkenberg",
        firstName: "Nico",
        team: "Haas F1 Team",
        car: "VF24",
        brand: "Haas",
        age: 36,
        score: 0
    },
]
function addPlayer() {
    return {
        name: document.getElementById("name").value,
        firstName: document.getElementById("firstName").value,
        team: document.getElementById("team").value,
        car: document.getElementById("car").value,
        brand: document.getElementById("brand").value,
        age: parseInt(document.getElementById("age").value),
        score: 0
    };
}

// Fonction pour récupérer les joueurs à partir du localStorage
function getPlayersFromStorage() {
    var playersString = localStorage.getItem('players');
    return playersString ? JSON.parse(playersString) : [];
}

// Fonction pour sauvegarder les joueurs dans le localStorage
function savePlayersToStorage(players) {
    localStorage.setItem('players', JSON.stringify(players));
}

document.getElementById("playerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let newPlayer = addPlayer();
    let players = getPlayersFromStorage(); // Récupérer les joueurs existants depuis le localStorage
    players.push(newPlayer); // Ajouter le nouveau joueur à la liste des joueurs
    savePlayersToStorage(players); // Sauvegarder la liste des joueurs mise à jour dans le localStorage
    document.getElementById("playerForm").reset();
});


document.getElementById("resetLocalStorage").addEventListener("click", function() {
    localStorage.clear();
    alert("LocalStorage réinitialisé !");
});


console.log(localStorage)
console.log(localStorage.players)




