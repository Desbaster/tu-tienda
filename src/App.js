import NavBar from "./components/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <ItemListContainer greeting = 'Bienvenidos, próximamente veras todos nuestros artículos'/>
    </div>
  );
}

export default App;
