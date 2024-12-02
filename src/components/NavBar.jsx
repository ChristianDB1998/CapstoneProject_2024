import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink} from "react-scroll";
import "./styles/NavBar.css";

const NavBar = () => {
const [isSideBarOpen, setisSideBarOpen] = useState(false);

const toggleSideBar = () => {
    setisSideBarOpen(!isSideBarOpen);
}

    return(
        <header className="header">

            {/* Image for Little Lemon */}
           <a href="/"><img src="./Logo.svg" alt="Little Lemon Logo" /></a> 

           
           {/* Hamburger Icon */}
           <button className="menu-icon" onClick={toggleSideBar}>
            <svg width="35" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.34615 0C0.6027 0 0 0.621833 0 1.38889C0 2.15594 0.6027 2.77778 1.34615 2.77778H33.6538C34.3972 2.77778 35 2.15594 35 1.38889C35 0.621833 34.3972 0 33.6538 0H1.34615ZM0 12.5C0 11.7329 0.6027 11.1111 1.34615 11.1111H33.6538C34.3972 11.1111 35 11.7329 35 12.5C35 13.2671 34.3972 13.8889 33.6538 13.8889H1.34615C0.6027 13.8889 0 13.2671 0 12.5ZM0 23.6111C0 22.8442 0.6027 22.2222 1.34615 22.2222H33.6538C34.3972 22.2222 35 22.8442 35 23.6111C35 24.3781 34.3972 25 33.6538 25H1.34615C0.6027 25 0 24.3781 0 23.6111Z" fill="black"/>
            </svg>
           </button>

            {/* Navigation Bar for Little Lemon Website */}
            <nav className="navbar">
                <Link className="navbar-item" to="/">Home</Link>
                <ScrollLink className="navbar-item" to="about" smooth={true} duration={500}>About</ScrollLink>
                <ScrollLink className="navbar-item" to="menu" smooth={true} duration={500}>Menu</ScrollLink>
                <Link className="navbar-item" to="/reservations">Reservations</Link>
                <Link className="navbar-item" to="/order-online">Order Online</Link>
                <Link className="navbar-item" to="/login">Login</Link>
            </nav>

            {/* Sidebar */}
            <aside className={`sidebar ${isSideBarOpen ? "open" : ""}`}>
                <nav className="sidebar-nav">
                    <Link className="navbar-item" to="/">Home</Link>
                    <ScrollLink className="navbar-item" to="about" smooth={true} duration={500}>About</ScrollLink>
                    <ScrollLink className="navbar-item" to="menu" smooth={true} duration={500}>Menu</ScrollLink>
                    <Link className="navbar-item" to="/reservations">Reservations</Link>
                    <Link className="navbar-item" to="/order-online">Order Online</Link>
                    <Link className="navbar-item" to="/login">Login</Link>
                </nav>
            </aside>

            {/* Overlay */}
            {isSideBarOpen && <div className="overlay" onClick={toggleSideBar}></div>}

        </header>
    );
}

export default NavBar;

