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
let games = [
    {
        name: "Circuit International de Bahrein",
        Country: "Bahrein",
        Date: "29 février - 02 mars 2024",
        NumberOfRounds: 57,
        Length: 5412,
        NumberOfDRSZones: 3
    },
    {
        name: "Jeddah Corniche Circuit",
        Country: "Arabie Saoudite",
        Date: "07-09 mars 2024",
        NumberOfRounds: 50,
        Length: 6174,
        NumberOfDRSZones: 3
    },
    {
        name: "Melbourne Grand Prix Circuit",
        Country: "Australie",
        Date: "22-24 mars 2024",
        NumberOfRounds: 58,
        Length: 5303,
        NumberOfDRSZones: 2
    },
    {
        name: "Suzuka International Racing Course",
        Country: "Japon",
        Date: "05-07 avril 2024",
        NumberOfRounds: 53,
        Length: 5807,
        NumberOfDRSZones: 1
    },
    {
        name: "Shanghai international Circuit",
        Country: "Chine",
        Date: "19-21 avril 2024",
        NumberOfRounds: 56,
        Length: 540,
        NumberOfDRSZones: 2
    },
    {
        name: "Miami International Autodrome",
        Country: "Miami",
        Date: "03-05 mai 2024",
        NumberOfRounds: 57,
        Length: 5410,
        NumberOfDRSZones: 0
    },
    {
        name: "Imola Emilie-Romagne",
        Country: "Italie",
        Date: "16-19 mai 2024",
        NumberOfRounds: 63,
        Length: 4909,
        NumberOfDRSZones: 1
    },
    {
        name: "Circuit de Monaco",
        Country: "Monaco",
        Date: "23-26 mai 2024",
        NumberOfRounds: 78,
        Length: 3337,
        NumberOfDRSZones: 1
    },
    {
        name: "Circuit Gilles Villeneuve",
        Country: "Canada",
        Date: "06-09 juin 2024",
        NumberOfRounds: 70,
        Length: 4361,
        NumberOfDRSZones: 2
    },
    {
        name: "Circuit de Barcelona-Catalunya",
        Country: "Espagne",
        Date: "21-23 juin 2024",
        NumberOfRounds: 66,
        Length: 4675,
        NumberOfDRSZones: 2
    },
    {
        name: "Red Bull Ring",
        Country: "Autriche",
        Date: "29-30 juin 2024",
        NumberOfRounds: 71,
        Length: 4318,
        NumberOfDRSZones: 3
    },
    {
        name: "Silverstone Circuit",
        Country: "Royaume-Uni",
        Date: "05-07 juillet 2024",
        NumberOfRounds: 52,
        Length: 5891,
        NumberOfDRSZones: 3
    },
    {
        name: "Hungaroring",
        Country: "Hongrie",
        Date: "19-21 juillet 2024",
        NumberOfRounds: 70,
        Length: 4381,
        NumberOfDRSZones: 2
    },
    {
        name: "Circuit de Spa-Francorchamps",
        Country: "Belgique",
        Date: "26-28 juillet 2024",
        NumberOfRounds: 44,
        Length: 7004,
        NumberOfDRSZones: 2
    },
    {
        name: "Circuit Zandvoort",
        Country: "Pays-Bas",
        Date: "23-25 août 2024",
        NumberOfRounds: 72,
        Length: 4259,
        NumberOfDRSZones: 2
    },
    {
        name: "Autodromo Nazionale Monza",
        Country: "Italie",
        Date: "29 août -01 septembre 2024",
        NumberOfRounds: 53,
        Length: 5793,
        NumberOfDRSZones: 3
    },
    {
        name: "Baku City Circuit",
        Country: "Azerbaïdjan",
        Date: "13-15 septembre 2024",
        NumberOfRounds: 0,
        Length: 6003,
        NumberOfDRSZones: 2
    },
    {
        name: "Marina Bay Street Circuit",
        Country: "Singapour",
        Date: "19-22 septembre 2024",
        NumberOfRounds: 61,
        Length: 5063,
        NumberOfDRSZones: 2
    },
    {
        name: "Circuit of the Americas",
        Country: "États-Unis",
        Date: "17-20 octobre 2024",
        NumberOfRounds: 56,
        Length: 503,
        NumberOfDRSZones: 2
    },
    {
        name: "Autódromo Hermanos Rodríguez",
        Country: "Mexique",
        Date: "25-27 octobre 2024",
        NumberOfRounds: 71,
        Length: 4304,
        NumberOfDRSZones: 2
    },
    {
        name: "Autódromo José Carlos Pace",
        Country: "Brésil",
        Date: "01-03 novembre 2024",
        NumberOfRounds: 71,
        Length: 4309,
        NumberOfDRSZones: 1
    },
    {
        name: "Las Vegas Street Circuit",
        Country: "États-Unis",
        Date: "21-23 novembre 2024",
        NumberOfRounds: 78,
        Length: 4830,
        NumberOfDRSZones: 2
    },
    {
        name: "Losail International Circuit",
        Country: "Qatar",
        Date: "22-24 novembre 2024",
        NumberOfRounds: 57,
        Length: 5380,
        NumberOfDRSZones: 2
    },
    {
        name: "Yas Marina Circuit",
        Country: "Émirats arabes unis",
        Date: "05-08 décembre 2024",
        NumberOfRounds: 55,
        Length: 5554,
        NumberOfDRSZones: 2
    }
]
let scores = [
    {
        place: 1,
        pointsWin: 25
    },
    {
        place: 2,
        pointsWin: 18
    },
    {
        place: 3,
        pointsWin: 15
    },
    {
        place: 4,
        pointsWin: 12
    },
    {
        place: 5,
        pointsWin: 10
    },
    {
        place: 6,
        pointsWin: 8
    },
    {
        place: 7,
        pointsWin: 6
    },
    {
        place: 8,
        pointsWin: 4
    },
    {
        place: 9,
        pointsWin: 2
    },
    {
        place: 10,
        pointsWin: 1
    },
    {
        place: 11,
        pointsWin: 0
    },
    {
        place: 12,
        pointsWin: 0
    },
    {
        place: 13,
        pointsWin: 0
    },
    {
        place: 14,
        pointsWin: 0
    },
    {
        place: 15,
        pointsWin: 0
    },
    {
        place: 16,
        pointsWin: 0
    },
    {
        place: 17,
        pointsWin: 0
    },
    {
        place: 18,
        pointsWin: 0
    },
    {
        place: 19,
        pointsWin: 0
    },
    {
        place: 20,
        pointsWin: 0
    },
    {
        place: 21,
        pointsWin: 0
    },
]

function displayPlayers(players) {
    const playersListContainer = document.getElementById("playersList");
    let html = "<ul>";
    players.forEach(player => {
        html += `<li>${player.firstName} ${player.name} - ${player.team} (${player.car} - ${player.brand}) - Age : ${player.age} - Score: ${player.score}</li>`;
    });
    html += "</ul>";
    playersListContainer.innerHTML = html;
}
function displayTracks(games) {
    const playersListContainer = document.getElementById("gamesList");
    let html = "<ul>";
    games.forEach(games => {
        html += `<li>${games.name} Pays :${games.Country} - ${games.Date} Nombre de tour : ${games.NumberOfRounds} - Distance : ${games.Length} m - Nombre de DRS : ${games.NumberOfDRSZones}</li>`;
    });
    html += "</ul>";
    playersListContainer.innerHTML = html;
}

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

document.getElementById("playerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let newPlayer = addPlayer();
    players.push(newPlayer);
    displayPlayers(players);
    document.getElementById("playerForm").reset();
});

displayPlayers(players);
displayTracks(games);
