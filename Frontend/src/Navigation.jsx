import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/Images/white-logo-withoutname.webp";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";

export default function Navigation() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // 👈 React toggle state

  const handleMenuClick = (idx) => {
    setSelectedMenu(idx);
    setIsOpen(false); // 👈 auto-close menu after clicking item
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">

        {/* LOGO */}
        <Link
          className="navbar-brand"
          to="/home"
          onClick={() => handleMenuClick(0)}
        >
          <img src={logo} alt="logo" className="logo" />
        </Link>

        {/* HAMBURGER */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}   // 👈 toggle using React
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV ITEMS */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/home" onClick={() => handleMenuClick(0)}>
                <p className={selectedMenu === 0 ? "menu selected" : "menu"}>Home</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/product" onClick={() => handleMenuClick(1)}>
                <p className={selectedMenu === 1 ? "menu selected" : "menu"}>Product</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact-us" onClick={() => handleMenuClick(2)}>
                <p className={selectedMenu === 2 ? "menu selected" : "menu"}>Contact Us</p>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
