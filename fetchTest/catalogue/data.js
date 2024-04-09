// Fonction pour cacher les divs initialement
function hideInitialElements() {
    const div = document.getElementById("div");
    div.style.display = 'none';
    const header = document.getElementById("header");
    header.style.display = 'none';
    const slider = document.getElementById("slider__wrapper");
    slider.style.display = 'none';
}
// Fonction pour créer et afficher le loader
function displayLoader() {
    const loader = document.createElement('img');
    loader.src = "FnnI.gif";
    loader.id = "loader";
    document.body.appendChild(loader);
    return loader;
}
// Fonction pour cacher le loader une fois que le contenu est chargé
function hideLoader(loader) {
    loader.style.display = 'none';
}
// Fonction pour afficher les données des pokémons depuis l'API
async function displayPokemonFromAPI(apiUrl, loader) {
    try {
        const apiData = await fetch(apiUrl);
        if (!apiData.ok) {
            throw new Error('Erreur lors de la requête API');
        }
        const data = await apiData.json();

        const div = document.getElementById("div");
        div.style.display = 'flex';
        const header = document.getElementById("header");
        header.style.display = 'block';
        const slider = document.getElementById("slider__wrapper");
        slider.style.display = 'block';

        hideLoader(loader);

        for (let i = 0; i < 150; i++) {
            const randomPokemon = data[Math.floor(Math.random() * data.length)];
            displayPokemon(randomPokemon, div);
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
}
// Fonction pour afficher les pokémons depuis le local storage
function displayPokemonFromStorage() {
    const div = document.getElementById("div");
    const pokemonData = getPokemonFromStorage();

    pokemonData.forEach((pokemon, index) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("local");
        newDiv.dataset.aos = "zoom-out-up";
        newDiv.dataset.aos.offset="800";
        div.appendChild(newDiv);

        // Créer les éléments pour chaque pokemon...
        const supElement = document.createElement("button");
        supElement.textContent = "❌";
        supElement.addEventListener("click", function() {
            newDiv.remove();
            pokemonData.splice(index, 1);
            updateLocalStorage(pokemonData);
        });

        newDiv.appendChild(supElement);

        const nameElement = document.createElement("p");
        nameElement.textContent = `Name: ${pokemon.name}`;
        newDiv.appendChild(nameElement);

        const pokedexIdElement = document.createElement("p");
        pokedexIdElement.textContent = `First Name: ${pokemon.pokedex_id}`;
        newDiv.appendChild(pokedexIdElement);

        const imageElement = document.createElement("img");
        imageElement.src = pokemon.image;
        newDiv.appendChild(imageElement);
    });
}
// Fonction pour afficher les données d'un Pokémon
function displayPokemon(pokemon, parentElement) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("card");
    newDiv.dataset.aos = "zoom-out-up";
    newDiv.dataset.aos.offset="800";
    parentElement.appendChild(newDiv);

    const pokedexIdElement = document.createElement("p");
    pokedexIdElement.textContent = `Pokedex ID: ${pokemon.pokedex_id}`;
    newDiv.appendChild(pokedexIdElement);

    const nameElement = document.createElement("p");
    nameElement.textContent = `Name: ${pokemon.name}`;
    newDiv.appendChild(nameElement);

    const pokemonImage = document.createElement("img");
    pokemonImage.src = pokemon.sprites.regular;
    pokemonImage.classList.add("pokemon-image");
    newDiv.appendChild(pokemonImage);

    const imageTypes = [];
    if (pokemon.sprites.regular !== null) {
        imageTypes.push({ "regular": pokemon.sprites.regular });
    }
    if (pokemon.sprites.shiny !== null) {
        imageTypes.push({ "shiny": pokemon.sprites.shiny });
    }
    if (pokemon.sprites.gmax !== null) {
        imageTypes.push({ "gmax.regular": pokemon.sprites.gmax.regular });
        imageTypes.push({ "gmax.shiny": pokemon.sprites.gmax.shiny });
        if (pokemon.sprites.gmax.regular && pokemon.sprites.gmax.shiny == null) {
            imageTypes.push({ "gmax": pokemon.sprites.gmax });
        }
    }

    let imageIndex = 0;
    pokemonImage.addEventListener('click', function () {
        imageIndex = (imageIndex + 1) % imageTypes.length;
        pokemonImage.src = Object.values(imageTypes[imageIndex])[0];
    });
}
// Fonction pour initialiser le slider
function initializeSlider() {
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
    }, 500);
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
// Fonction pour récupérer les données des pokémons depuis le localStorage
function getPokemonFromStorage() {
    let pokemonString = localStorage.getItem('pokemon');
    return pokemonString ? JSON.parse(pokemonString) : [];
}
// Fonction principale
async function main() {
    hideInitialElements();
    const loader = displayLoader();
    await new Promise(resolve => setTimeout(resolve, 3000));
    hideLoader(loader);
    displayPokemonFromStorage();
    await displayPokemonFromAPI("https://tyradex.tech/api/v1/pokemon", loader);
    initializeSlider();
}
// Appeler la fonction principale
main();

const btn = document.getElementById("btnSwitch")
    btn.addEventListener("click",() => {
        const div = document.getElementById("div")
        div.classList.toggle('switchOrientation')
    })
