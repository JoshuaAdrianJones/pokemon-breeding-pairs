import "./Dropdown.css";
import pokemon_data from "../data/pokemon_data";
function Dropdown() {
  return (
    <div className="Dropdown">
      <p>Dropdown</p>
      <ul>
        {pokemon_data.Pokemon.map((item, key) => (
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
console.log(pokemon_data);
export default Dropdown;
