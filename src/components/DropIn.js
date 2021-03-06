import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useState, useEffect } from "react";
import "./Dropin.css";
export default function DropIn(props) {
  //set up state hooks

  const [data, setData] = useState(props.initial_pokemon); //seed initial pokemon list

  const [currentSelection, setCurrentSelection] = useState(
    props.initial_pokemon.Pokemon[0].name
  ); // seed initial drop down selection

  const [egg_groups, setEggGroups] = useState(
    props.initial_pokemon.Pokemon[0].egg_groups
  ); // egg groups come from the input dropdown pokemon selected
  const [compatiblePokemon, setPokemon] = useState(
    props.initial_pokemon.Pokemon[0].compatible_pokemon.pokemon_species.map(
      (item) => item.name
    )
  ); // seed egg pokemon group array with demo data

  //event listener
  const handleChange = (event) => {
    setCurrentSelection(event.target.value);
  };
  //effects

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("pokemon_data.json");
      const newData = await response.json();
      setData(newData);
    };
    fetchData();
  }, []); // load drop down data of pokemon

  useEffect(() => {
    setEggGroups(
      data.Pokemon.find((element) => element.name === currentSelection)
        .egg_groups
    ); //update value of egg groups when selected
  }, [data.pokemon, currentSelection]);

  // every time egg groups change pull in the pokemon from that egg group
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  useEffect(() => {
    const pokemon = [];
    const fetch_compatible_pokemon = () =>
      Promise.all(
        // use promise.all to resolve multiple fetches
        egg_groups.map(async (item) => {
          const response = await fetch(`${item.name}.json`);
          const new_data = await response.json();
          pokemon.push(new_data);
          setPokemon(
            removeDuplicates(
              pokemon
                .map((item) => item.pokemon_species)
                .flat()
                .map((item) => item.name)
            )
          );
          // compatiblePokemon == list of strings
        })
      );
    fetch_compatible_pokemon(); //adds pokemon groups to pokemon array
  }, [currentSelection, egg_groups]); // any time egg groups update fetch compatible pokemon

  function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
  return (
    <Box sx={{ minWidth: 120 }}>
      <div className="pickNote">
        <p>select a pokemon!</p>
      </div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Pokemon</InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentSelection}
          label="egggroups"
          onChange={handleChange}
        >
          {data.Pokemon.sort(compare).map((pokemon, key) => (
            <MenuItem key={key} value={pokemon.name}>
              {toTitleCase(pokemon.name)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* <h4>you picked : {currentSelection}</h4> */}

      <h5>Egg Groups:</h5>
      <ul>
        {egg_groups.map((eggGroup, key) => (
          <li className="groups" key={key}>
            {eggGroup.name}
          </li>
        ))}
      </ul>

      <h4>Compatible Pokemon:</h4>
      <ul>
        {compatiblePokemon.sort().map((pokemonName, key) => (
          <li className="pokemon-in-list" key={key}>
            {toTitleCase(pokemonName)}
          </li>
        ))}
      </ul>
    </Box>
  );
}
