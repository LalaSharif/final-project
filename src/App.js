import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Abaout from "./pages/Abaout";
import Home from "./pages/Home";
import Productspage from "./pages/Productspage";
import Collectionspage from "./pages/Collectionspage";
import Contactt from "./pages/Contactt";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<Abaout />}></Route>
          <Route path="/products" element={<Productspage />}></Route>
          <Route path="/collections" element={<Collectionspage />}></Route>
          <Route path="/contact" element={<Contactt />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
