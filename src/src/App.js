import pkmn from "./pokemon_logo.png";
import egg from "./pokemon_egg.png";
import "./App.css";
import Dummy from "./components/Dummy";
import DropDown from "./components/Dropdown";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pkmn} className="pkmn" alt="pokemon logo" />
        <img src={egg} className="egg" alt="pokemon egg" />
        <Dummy />

        <DropDown />
      </header>
    </div>
  );
}

export default App;
