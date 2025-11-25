import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/Images/white-logo-withoutname.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Required for collapse
import "./Navigation.css";

export default function Navigation() {
  const [selectedMenu, setSelectedMenu] = useState(0);

  const handleMenuClick = (idx) => {
    setSelectedMenu(idx);
  };

  // ---- AUTO CLOSE NAVBAR ON MOBILE ----
  const closeNavbar = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar) {
      const bsCollapse = new bootstrap.Collapse(navbar, { toggle: false });
      bsCollapse.hide();
    }
  };

  const menuClass = "menu";
  const activatedMenuClass = "menu selected";

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">

        {/* LOGO */}
        <Link className="navbar-brand" to="/home" onClick={() => { handleMenuClick(0); closeNavbar(); }}>
          <img src={logo} alt="logo" className="logo" />
        </Link>

        {/* HAMBURGER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV ITEMS */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/home"
                onClick={() => { handleMenuClick(0); closeNavbar(); }}
              >
                <p className={selectedMenu === 0 ? activatedMenuClass : menuClass}>Home</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/product"
                onClick={() => { handleMenuClick(1); closeNavbar(); }}
              >
                <p className={selectedMenu === 1 ? activatedMenuClass : menuClass}>Product</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact-us"
                onClick={() => { handleMenuClick(2); closeNavbar(); }}
              >
                <p className={selectedMenu === 2 ? activatedMenuClass : menuClass}>Contact Us</p>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
