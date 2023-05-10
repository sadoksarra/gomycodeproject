import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
function Header() {
  const { totalCount } = useSelector((state) => state.cart);
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <Link to="/cart">
              <img className="logo"
                src="https://img.freepik.com/vecteurs-libre/remises-vente-saisonnieres-presente-achat-visite-boutiques-shopping-luxe-bons-reduction-promotionnels-offres-speciales-vacances-illustration-metaphore-concept-isole-vecteur_335657-2766.jpg?w=740&t=st=1683405271~exp=1683405871~hmac=09ee02cd40e53ffafc2e7a76a603b06950604a56eeaea65be0157b7e48f5e3f0"
                height="15"
                alt="MDB Logo"
                loading="lazy"
              />
             </Link>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/"  class="nav-link">
                  Home 
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartShopping} size="lg" />
              <div className="notification">
              <span className="badge rounded-pill badge-notification bg-danger">
              {totalCount}
              </span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
