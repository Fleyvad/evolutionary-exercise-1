import "./App.css";
import ContactList from "./components/container/ContactList";
import Clock from "./components/pure/Clock";
import ComponentA from "./components/pure/ComponentA";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Contact</h3>
        {/* <ComponentA></ComponentA>
        <Clock></Clock> */}
        <ContactList />
      </header>
    </div>
  );
}

export default App;
