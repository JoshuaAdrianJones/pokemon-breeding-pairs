import pkmn from "./pokemon_logo.png";
import egg from "./pokemon_egg.png";
import "./App.css";
import Welcome from "./components/Welcome";
import DropIn from "./components/DropIn";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pkmn} className="pkmn" alt="pokemon logo" />
        <img src={egg} className="egg" alt="pokemon egg" />

        <Welcome />
      </header>
      <DropIn />
    </div>
  );
}

export default App;
