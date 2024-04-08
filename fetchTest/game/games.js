let tabGames = [

    {
        "name": "Hand Game",
        "desc": "Déscription",
        "rules": "play with ",
        "images": "handGame.png",
        "script": "./handgame.js",
    }, {
        "name": "Traductor fr to whale",
        "desc": "Déscription",
        "rules": "play with ",
        "images": "fToB.png",
        "script": "./ftob.js",
    }, {
        "name": "Traductor chiffre R to A",
        "desc": "Déscription",
        "rules": "play with ",
        "images": "aToR.png",
        "script": "./ator.js",
    },]

function displayGame(games) {
    const parentElement = document.getElementById("gameContainer");

    games.forEach(game => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("tabGames");
        parentElement.appendChild(newDiv);

        const gameIdElement = document.createElement("p");
        gameIdElement.textContent = `Name: ${game.name}`;
        newDiv.appendChild(gameIdElement);

        const gameImage = document.createElement("img");
        gameImage.src = game.images;
        gameImage.classList.add("game-image");
        newDiv.appendChild(gameImage);

        const descElement = document.createElement("p");
        descElement.textContent = `Description: ${game.desc}`;
        newDiv.appendChild(descElement);

        const rulesElement = document.createElement("p");
        rulesElement.textContent = `Description: ${game.rules}`;
        newDiv.appendChild(rulesElement);
    });
};

displayGame(tabGames);
