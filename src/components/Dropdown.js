import "./Dropdown.css";
import React, { useState, useEffect } from "react";
// prototype component
export default function Dropdown() {
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

  //console.log(data);

  return (
    <div className="Dropdown">
      <p>Dropdown</p>

      <hr />

      <ul>
        {data.Pokemon.map((item, key) => (
          <li key={key}>
            {item.id} {item.name}
            {item.egg_groups.map((item, key) => (
              <ul>
                <li key={key}> {item.name} </li>
              </ul>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
