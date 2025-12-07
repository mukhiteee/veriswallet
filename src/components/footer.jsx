import React from "react";

const Footer = () => {
    return (
        <>
    <footer id="section-9-footer" class="section">
        <div class="footer-content">
            <div class="footer-column">
                <h3>Resources</h3>
                <ul class="footer-links">
                    <li><a href="#">Whitepaper</a></li>
                    <li><a href="#">Documentation</a></li>
                    <li><a href="#">API Reference</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>

            <div class="footer-column">
                <h3>Company</h3>
                <ul class="footer-links">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div class="footer-column">
                <h3>Legal</h3>
                <ul class="footer-links">
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                </ul>
            </div>

            <div class="footer-column">
                <h3>Community</h3>
                <div class="social-icons">
                    <a href="#" class="social-icon">𝕏</a>
                    <a href="#" class="social-icon">💬</a>
                    <a href="#" class="social-icon">🐙</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 Veris Wallet. All rights reserved. Building the trust layer for Web3.</p>
        </div>
    </footer>
        </>
    )
};

export default Footer;