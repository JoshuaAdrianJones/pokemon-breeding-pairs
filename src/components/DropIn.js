import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useState, useEffect } from "react";
import "./Dropin.css";
export default function DropIn() {
  const demo_pokemon = {
    Pokemon: [
      {
        id: 1,
        name: "bulbasaur",
        egg_groups: [
          { name: "monster", url: "https://pokeapi.co/api/v2/egg-group/1/" },
          { name: "plant", url: "https://pokeapi.co/api/v2/egg-group/7/" },
        ],
      },
    ],
  }; // dummy data

  const egg_list = {
    id: 1,
    name: "monster",

    pokemon_species: [
      {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon-species/1/",
      },
    ],
  }; // dummy data

  const [egg_groups, setEggGroups] = useState(
    demo_pokemon.Pokemon[0].egg_groups
  ); // egg groups come from the input dropdown pokemon selected
  const [data, setData] = useState(demo_pokemon); //seed initial pokemon data with demo data
  const [egg_mons, setEggMons] = useState(egg_list); // seed egg pokemon group array with demo data
  const [currentSelection, setCurrentSelection] = useState("bulbasaur");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("pokemon_data.json");
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
    console.log("load list of pokemon");
  }, []); // load drop down data of pokemon

  const handleChange = (event) => {
    setCurrentSelection(event.target.value);
  };
  console.log(currentSelection);

  useEffect(() => {
    setEggGroups(
      data.Pokemon.find((element) => element.name === currentSelection)
        .egg_groups
    ); //update value of egg groups when selected
    console.log(egg_groups);
  }, [currentSelection]);

  // every time egg groups change pull in the pokemon from that egg group
  // dummy for now looks up monster every time
  useEffect(() => {
    const fetch_mons = async () => {
      const response = await fetch("monster.json");
      const newData = await response.json();
      setEggMons(newData);
    };

    fetch_mons();
    console.log("fetched new egg mons");
  }, [egg_groups]);

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
          {data.Pokemon.map((item, key) => (
            <MenuItem key={key} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <h4>you picked : {currentSelection}</h4>

      <h5>egg groups:</h5>
      <ul>
        {egg_groups.map((item, key) => (
          <li>{item.name}</li>
        ))}
      </ul>

      <h4>compatible pokemon:</h4>
      <ul>
        {egg_mons.pokemon_species.map((item, key) => (
          <li key={key}>{item.name}</li>
        ))}
      </ul>
    </Box>
  );
}
