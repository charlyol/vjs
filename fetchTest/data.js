// async function callApi(toto) {
//     try {
//         const api = await fetch(toto);
//         if (!api.ok) {
//             throw new Error('Erreur lors de la requête API');
//         }
//         const data = await api.json();
//
//         console.log(data);
//
//         const containerDiv = document.getElementById("div");
//
//         for (let i = 1; i < 20; i++) {
//             const newDiv = document.createElement("div");
//             newDiv.classList.add("card"); // Ajoutez la classe "card" au nouveau div
//             containerDiv.appendChild(newDiv);
//
//             const pokedexIdElement = document.createElement("p");
//             pokedexIdElement.textContent = `Pokedex ID: ${data[i].pokedex_id}`;
//             newDiv.appendChild(pokedexIdElement);
//
//             const nameElement = document.createElement("p");
//             nameElement.textContent = `Name: ${data[i].name.fr}`;
//             newDiv.appendChild(nameElement);
//
//             const imgRegular = document.createElement("img");
//             imgRegular.src = `${data[i].sprites.regular}`;
//             imgRegular.classList.add("regular-image");
//             newDiv.appendChild(imgRegular);
//
//             const imgShiny = document.createElement("img");
//             imgShiny.src = `${data[i].sprites.shiny}`;
//             imgShiny.classList.add("shiny-image");
//             newDiv.appendChild(imgShiny);
//
//             const imgGmax = document.createElement("img");
//             imgGmax.src = `${data[i].sprites.gmax}`;
//             imgGmax.classList.add("gmax-image");
//             newDiv.appendChild(imgGmax);
//
//         }
//     } catch (error) {
//         console.error('Erreur lors de la récupération des données:', error);
//     }
// }
//
// callApi("https://tyradex.tech/api/v1/pokemon");

async function callApi(toto) {
    try {
        const api = await fetch(toto);
        if (!api.ok) {
            throw new Error('Erreur lors de la requête API');
        }
        const data = await api.json();

        console.log(data);

        const containerDiv = document.getElementById("div");

        for (let i = 1; i < 20; i++) {

            const newDiv = document.createElement("div");
            newDiv.classList.add("card"); // Ajoutez la classe "card" au nouveau div
            containerDiv.appendChild(newDiv);

            const pokedexIdElement = document.createElement("p");
            pokedexIdElement.textContent = `Pokedex ID: ${data[i].pokedex_id}`;
            newDiv.appendChild(pokedexIdElement);

            const nameElement = document.createElement("p");
            nameElement.textContent = `Name: ${data[i].name.fr}`;
            newDiv.appendChild(nameElement);

            const pokemonImage = document.createElement("img");
            pokemonImage.src = `${data[i].sprites.regular}`;
            pokemonImage.classList.add("pokemon-image");
            newDiv.appendChild(pokemonImage);

            const imageTypes = [];

            if (data[i].sprites.regular !== null) {
                imageTypes.push(`${data[i].sprites.regular}`);
            }
            if (data[i].sprites.shiny !== null) {
                imageTypes.push(`${data[i].sprites.shiny}`);
            }
            if (data[i].sprites.gmax !== null) {
                imageTypes.push(`${data[i].sprites.gmax.regular}`);
                imageTypes.push(`${data[i].sprites.gmax.shiny}`);
                if (data[i].sprites.gmax.regular && data[i].sprites.gmax.shiny == null ) {
                    imageTypes.push(`${data[i].sprites.gmax}`);
                }
            }

            let imageIndex = 0;

            pokemonImage.addEventListener('click', function () {
                imageIndex = (imageIndex + 1) % imageTypes.length;
                pokemonImage.src = imageTypes[imageIndex];
            });
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
}

callApi("https://tyradex.tech/api/v1/pokemon");


