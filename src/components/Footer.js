import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3 className="footer-name">Vishal Junghare</h3>

                <div className="footer-socials">
                    <a href="https://github.com/Vishalvj13" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/vishal-junghare-vj/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Vishal Junghare | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
