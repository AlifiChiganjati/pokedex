const pokedex = document.querySelector("#pokedex");

const getPokemon = () => {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const pokemonData = [];

  for (let i = 1; i <= 151; i++) {
    const allPokemon = `${url}/${i}`;

    fetch(allPokemon)
      .then((res) => res.json())
      .then((data) => {
        const pokemon = {
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
        };

        pokemonData.push(pokemon);

        if (pokemonData.length === 151) {
          displayPokemon(pokemonData);
        }
      })
      .catch((error) => console.error("Error fetching Pokémon data:", error));
  }
};

const displayPokemon = (pokemon) => {
  const pokemonString = pokemon
    .map(
      (singlePokemon) => `
        <li>
          <img src="${singlePokemon.image}" alt="${singlePokemon.name}" />
          <h3>${singlePokemon.id}. ${singlePokemon.name}</h3>
        </li>`,
    )
    .join("");

  pokedex.innerHTML = pokemonString;
};

getPokemon();
