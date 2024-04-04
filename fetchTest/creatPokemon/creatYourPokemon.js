function addPokemon() {
    return {
        name: document.getElementById("name").value,
        firstName: document.getElementById("firstName").value,
        team: document.getElementById("team").value,
        level: parseInt(document.getElementById("level_100").value), // Utiliser level_100 à la place de level
        weight: parseInt(document.getElementById("weight").value),
        pokedex_id: parseInt(document.getElementById("pokedex_id").value),
        image: document.getElementById("imageLink").value,
    };
}

function getPokemonFromStorage() {
    var pokemonString = localStorage.getItem('pokemon');
    return pokemonString ? JSON.parse(pokemonString) : [];
}

function savePokemonToStorage(pokemon) {
    localStorage.setItem('pokemon', JSON.stringify(pokemon));
}

document.getElementById("pokemonForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let newPokemon = addPokemon();
    let pokemon = getPokemonFromStorage(); // Récupérer les Pokémon existants depuis le localStorage
    pokemon.push(newPokemon); // Ajouter le nouveau Pokémon à la liste des Pokémon
    savePokemonToStorage(pokemon); // Sauvegarder la liste des Pokémon mise à jour dans le localStorage
    document.getElementById("pokemonForm").reset();
    alert("La création du Pokémon a réussi ! Vas voir dans le Pokedex");
});



document.getElementById("resetLocalStorage").addEventListener("click", function() {
    localStorage.clear();
    alert("LocalStorage réinitialisé !");
});








