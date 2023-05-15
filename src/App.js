import "./App.css";
import Clock from "./components/pure/Clock";
import ComponentA from "./components/pure/ComponentA";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact</h1>
        <ComponentA></ComponentA>
        <Clock></Clock>
      </header>
    </div>
  );
}

export default App;
