import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink} from "react-scroll";
import "./styles/NavBar.css";

const NavBar = () => {
    return(
        <header className="header">

            {/* Image for Little Lemon */}
           <a href="/"><img src="./Logo.svg" alt="Little Lemon Logo" /></a> 

            {/* Navigation Bar for Little Lemon Website */}
            <nav className="navbar">
                <Link className="navbar-item" to="/">Home</Link>
                <ScrollLink className="navbar-item" to="about" smooth={true} duration={500}>About</ScrollLink>
                <ScrollLink className="navbar-item" to="menu" smooth={true} duration={500}>Menu</ScrollLink>
                <Link className="navbar-item" to="/reservations">Reservations</Link>
                <Link className="navbar-item" to="/order-online">Order Online</Link>
                <Link className="navbar-item" to="/login">Login</Link>
            </nav>
        </header>
    );
}

export default NavBar;

