import NavBar from "./components/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
