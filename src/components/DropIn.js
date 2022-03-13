import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect } from "react";
import "./Dropin.css";
export default function DropIn() {
  const [egg_groups, setAge] = React.useState([]); // set default pokemon to id 1
  const [egg_mons, setEggMons] = React.useState([]);
  const demo = {
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
  };

  const [data, setData] = useState(demo);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("pokemon_data.json");
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(egg_groups);
  var res = "no pokemon picked yet";
  if (egg_groups.length === 0) {
    //  block of code to be executed if the condition is true
  } else {
    //fetch the list of pokemon from the correct egg group
    // test with monster, dragon, plant
    const fetchData = async () => {
      const response = await fetch("pokemon_data.json");
      const newData = await response.json();
      setData(newData);
    };
    fetchData();
    res = egg_groups.map((item, key) => <li key={key}>{item.name}</li>); //  block of code to be executed if the condition is false
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <div className="pickNote">
          <p>select a pokemon!</p>
        </div>
        <Select
          id="demo-simple-select"
          value={egg_groups}
          label="egg_groups"
          onChange={handleChange}
        >
          {data.Pokemon.map((item, key) => (
            <MenuItem key={key} value={item.egg_groups}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <h4>you picked : </h4>
      <ul>{res}</ul>
    </Box>
  );
}
