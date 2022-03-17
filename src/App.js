import pkmn from "./pokemon_logo.png";
import egg from "./pokemon_egg.png";
import "./App.css";
import Welcome from "./components/Welcome";
import DropIn from "./components/DropIn";
function App() {
  const initial_pokemon = {
    Pokemon: [
      {
        id: 1,
        name: "bulbasaur",
        egg_groups: [
          { name: "monster", url: "https://pokeapi.co/api/v2/egg-group/1/" },
          { name: "plant", url: "https://pokeapi.co/api/v2/egg-group/7/" },
        ],
        compatible_pokemon: {
          id: 7,
          name: "plant",

          pokemon_species: [
            {
              name: "bulbasaur",
              url: "https://pokeapi.co/api/v2/pokemon-species/1/",
            },
            {
              name: "venasuar",
              url: "https://pokeapi.co/api/v2/pokemon-species/1/",
            },
            {
              name: "ivysaur",
              url: "https://pokeapi.co/api/v2/pokemon-species/1/",
            },
          ],
        },
      },
    ],
  }; // seed initial data

  return (
    <div className="App">
      <header className="App-header">
        <img src={pkmn} className="pkmn" alt="pokemon logo" />
        <img src={egg} className="egg" alt="pokemon egg" />

        <Welcome />
      </header>
      <DropIn initial_pokemon={initial_pokemon} />
    </div>
  );
}

export default App;
