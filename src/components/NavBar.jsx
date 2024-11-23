import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return(
        <header className="header">
            <img src="./Logo.svg" alt="Little Lemon Logo" />

            <nav className="navbar">
                <Link className="navbar-item" to="/">Home</Link>
                <Link className="navbar-item" to="#about">About</Link>
                <Link className="navbar-item" to="#menu">Menu</Link>
                <Link className="navbar-item" to="/reservations">Reservations</Link>
                <Link className="navbar-item" to="/order-online">Order Online</Link>
                <Link className="navbar-item" to="/login">Login</Link>
            </nav>
        </header>
    );
}

export default NavBar;

