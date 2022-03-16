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

  const egg_list = [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon-species/1/",
    },
  ]; // dummy data
  const [egg_mons, setEggMons] = useState(egg_list); // seed egg pokemon group array with demo data
  const [egg_groups, setEggGroups] = useState(
    demo_pokemon.Pokemon[0].egg_groups
  ); // egg groups come from the input dropdown pokemon selected

  const [data, setData] = useState(demo_pokemon); //seed initial pokemon data with demo data

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

  useEffect(() => {
    setEggGroups(
      data.Pokemon.find((element) => element.name === currentSelection)
        .egg_groups
    ); //update value of egg groups when selected
  }, [currentSelection]);

  // every time egg groups change pull in the pokemon from that egg group
  // dummy for now looks up monster every time

  const [mons, setMons] = useState([]);
  const [monStore, setMonStore] = useState([]);
  let mons_holder = [];
  const fetch_mons = () =>
    Promise.all(
      // use promise.all to resolve multiple fetches
      egg_groups.map(async (item) => {
        let response = await fetch(`${item.name}.json`);
        let new_data = await response.json();
        return new_data;
      })
    ).then((results) => mons_holder.push(results)); //push fetch results to an array

  useEffect(() => {
    mons_holder = [];
    fetch_mons();
    setMons(mons_holder);
    console.log(mons);
    setMonStore(
      mons
        .map((nested) => {
          return nested.map((item) => {
            return item.pokemon_species;
          });
        })
        .flat(2)
    );
    console.log(monStore);

    setEggMons(monStore);
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
        {egg_mons.map((item, key) => (
          <li key={key}>{item.name}</li>
        ))}
      </ul>
    </Box>
  );
}
