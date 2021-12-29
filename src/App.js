import NavBar from "./components/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
