async function callApi(toto) {
    try {
        // Cacher les divs initialement
        const div = document.getElementById("div");
        div.style.display = 'none';
        const header = document.getElementById("header");
        console.log(header)
        header.style.display = 'none';

        // Créer et afficher le loader
        const loader = document.createElement('img');
        loader.src = "FnnI.gif";
        loader.id = "loader";
        document.body.appendChild(loader);

        const api = await fetch(toto);
        if (!api.ok) {
            throw new Error('Erreur lors de la requête API');
        }
        const data = await api.json();

        console.log(data);

        setTimeout(() => {
            div.style.display = 'grid';
            header.style.display = 'block';
            loader.style.display = 'none';

            let j = 0
            while (j < localStorage.length) {
                const pokemonData = JSON.parse(localStorage.getItem('pokemon'));
                if (pokemonData) {
                    pokemonData.forEach(pokemon => {
                        const newDiv = document.createElement("div");
                        newDiv.classList.add("card");
                        div.appendChild(newDiv);

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
                } else {
                    console.log("Aucun Pokémon trouvé dans le localStorage.");
                }
                j++;
            }
            let i = 1
            while (i < 50) {
                const newDiv = document.createElement("div");
                newDiv.classList.add("card");
                div.appendChild(newDiv);

                let r = Math.floor(Math.random() * 1025) + 1;

                const pokedexIdElement = document.createElement("p");
                pokedexIdElement.textContent = `Pokedex ID: ${data[r].pokedex_id}`;
                newDiv.appendChild(pokedexIdElement);

                const nameElement = document.createElement("p");
                nameElement.textContent = `Name: ${data[r].name.fr}`;
                newDiv.appendChild(nameElement);

                const pokemonImage = document.createElement("img");
                pokemonImage.src = `${data[r].sprites.regular}`;
                pokemonImage.classList.add("pokemon-image");
                newDiv.appendChild(pokemonImage);

                const imageTypes = [];
                if (data[r].sprites.regular !== null) {
                    imageTypes.push({
                        "regular": `${data[r].sprites.regular}`
                    });
                }
                if (data[r].sprites.shiny !== null) {
                    imageTypes.push({
                        "shiny": `${data[r].sprites.shiny}`
                    });
                }
                if (data[r].sprites.gmax !== null) {
                    imageTypes.push({
                        "gmax.regular": `${data[r].sprites.gmax.regular}`
                    });
                    imageTypes.push({
                        "gmax.shiny": `${data[r].sprites.gmax.shiny}`
                    });
                    if (data[r].sprites.gmax.regular && data[r].sprites.gmax.shiny == null) {
                        imageTypes.push({
                            "gmax": `${data[r].sprites.gmax}`
                        });
                    }
                }
                console.log(imageTypes);

                let imageIndex = 0;
                pokemonImage.addEventListener('click', function () {
                    imageIndex = (imageIndex + 1) % imageTypes.length;
                    pokemonImage.src = Object.values(imageTypes[imageIndex])[0];
                });

                i++
            }
        }, 2500);

    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
}

callApi("https://tyradex.tech/api/v1/pokemon");

function getPokemonFromStorage() {
    let pokemonString = localStorage.getItem('pokemon');
    return pokemonString ? JSON.parse(pokemonString) : [];
}

console.log(localStorage)
console.log(localStorage.pokemon)