import React from "react";
import { Link } from "react-router-dom";
import {Link as ScrollLink } from "react-scroll";
import "./styles/Footer.css";

const Footer = () => {
    return(
        <footer className="footer">
            <img src="./Logo.svg" alt="Little Lemon Logo" />
            <div className="footer-item">
                <h3>Doormat Navigation</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><ScrollLink to="about">About</ScrollLink></li>
                    <li><ScrollLink to="menu">Menu</ScrollLink></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link to="/order-online">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
            <div className="footer-item">
                <h3>Contact</h3>
                <ul>
                    <li><a href="https://maps.app.goo.gl/5kH6JAHkAMiDGUA77" target="_blank" rel="noopener noreferrer">Address</a></li>
                    <li><a href="tel:+12462526574">Phone Number</a></li>
                    <li><a href="mailto:littlelemon@gmail.com">Email</a></li>
                </ul>
            </div>
            <div className="footer-item">
                <h3>Social Media links</h3>
                <ul>
                    <li><a href="https://facebook.com/littlelemon" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://instagram.com/littlelemon" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://twitter.com/littlelemon" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://youtube.com/littlelemon" target="_blank" rel="noopener noreferrer">Youtube</a></li>
                </ul>
            </div>

        </footer>
    );

}

export default Footer;