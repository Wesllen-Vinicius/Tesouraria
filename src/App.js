import Home from "./FrontEnd/Componentes/Home";
import Footer from "./FrontEnd/Componentes/Footer";
import Header from "./FrontEnd/Componentes/Header";
import Menu from "./FrontEnd/Componentes/Menu";
import "./app.css";
function App() {
  return (
    <div id="app">
      <Header />
      <Menu />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
