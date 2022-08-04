import "./App.css";
import Contato from "./pages/Contato";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Stack from "./pages/Stack";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Stack />
      <Projetos />
      <Contato />
      <Footer/>
    </div>
  );
}

export default App;
