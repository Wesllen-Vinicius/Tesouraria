import Contnet from "../../Componentes/Content/index";
import Footer from "../../Componentes/Footer/index";
import Header from "../../Componentes/Header/index";
import Menu from "../../Componentes/Menu/index";
import "./home.css";
function Home() {
  return (
    <div id="app">
      <Header />
      <Menu />
      <Contnet />
      <Footer />
    </div>
  );
}
export default Home;
