import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/Images/white-logo-withoutname.png";
import "./Navigation.css";

export default function Navigation() {
  let [selectedMenu, setSelectedMenu] = useState(0);

  const HandelMenuClick = (idx) => {
    setSelectedMenu(idx);
  };

  let menuClass = "menu";
  let activatedMenuClass = "menu selected";

  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/home">
              <img src={logo} alt="logo image" className="logo" />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/home" onClick={()=>HandelMenuClick(0)}>
                    <p
                      className={
                        selectedMenu === 0 ? activatedMenuClass : menuClass
                      }
                    >
                      Home
                    </p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/product" onClick={()=>HandelMenuClick(1)}>
                    <p
                      className={
                        selectedMenu === 1 ? activatedMenuClass : menuClass
                      }
                    >
                      Product
                    </p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contact-us" onClick={()=>HandelMenuClick(2)}>
                    <p
                      className={
                        selectedMenu === 2 ? activatedMenuClass : menuClass
                      }
                    >
                      Contact Us
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
