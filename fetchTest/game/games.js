
function iniSlider() {
    let slides = document.querySelectorAll(".slide"),
        slider = document.querySelector(".slider"),
        last = slider.lastElementChild,
        first = slider.firstElementChild,
        btn = document.querySelectorAll(".btn");

    slider.insertBefore(last, first);

    btn.forEach(btn => {
        btn.addEventListener("click", movement);
    });
    setInterval(function()
    {
        movement({target:{id:"next"}});
    }, 3000);
    function movement(e) {
        slider = document.querySelector(".slider");
        last = slider.lastElementChild;
        first = slider.firstElementChild;

        const activeSlide = document.querySelector(".active");

        if (e.target.id === "next") {
            slider.insertBefore(first, last.nextSibling);

            activeSlide.classList.remove("active");
            activeSlide.nextElementSibling.classList.add("active");
        } else {
            slider.insertBefore(last, first);
            activeSlide.classList.remove("active");
            activeSlide.previousElementSibling.classList.add("active");
        }
    }
}

iniSlider();

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
        const newCard = document.createElement("div");
        newCard.classList.add("gameCard");
        parentElement.appendChild(newCard);

        const newFront = document.createElement("div");
        newFront.classList.add("card-front");
        newFront.classList.add("cardInner");
        newCard.appendChild(newFront);
        const gameIdElement = document.createElement("p");

        gameIdElement.textContent = `${game.name}`;
        newFront.appendChild(gameIdElement);
        const gameImage = document.createElement("img");

        gameImage.src = game.images;
        gameImage.classList.add("game-image");
        newFront.appendChild(gameImage);

        const newBack = document.createElement("div");
        newBack.classList.add("card-back");
        newBack.classList.add("cardInner");
        newCard.appendChild(newBack);

        const descElement = document.createElement("p");
        descElement.textContent = `Description: ${game.desc}`;
        newBack.appendChild(descElement);

        const rulesElement = document.createElement("p");
        rulesElement.textContent = `Description: ${game.rules}`;
        newBack.appendChild(rulesElement);

        newCard.addEventListener("click",function(){
            newCard.classList.toggle("is-flipped")
        })
    });
    };



displayGame(tabGames);




