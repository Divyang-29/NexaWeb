import "./App.css";
import Navigation from "./Navigation";
import Home from "./HomeScreen/Home";
import Product from "./ProductScreen/Product";
import Support from "./SupportScreen/Support";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";


function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Navigation />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/contact-us" element={<Support />}></Route>
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
