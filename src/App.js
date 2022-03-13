import pkmn from "./pokemon_logo.png";
import egg from "./pokemon_egg.png";
import "./App.css";
import Welcome from "./components/Welcome";
import DropDown from "./components/Dropdown";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pkmn} className="pkmn" alt="pokemon logo" />
        <img src={egg} className="egg" alt="pokemon egg" />
        <Welcome />
        <DropDown />
      </header>
    </div>
  );
}

export default App;
