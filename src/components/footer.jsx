import React from "react";

const Footer = () => {
    return (
        <>
    <footer id="section-9-footer" className="section">
        <div className="footer-content">
            <div className="footer-column">
                <h3>Resources</h3>
                <ul className="footer-links">
                    <li><a href="Veris wallet whitepaper V1.0..pdf" target="_blank" rel="noopener noreferrer">Whitepaper</a></li>
                </ul>
            </div>

            <div className="footer-column">
                <h3>Contact</h3>
                <div className="contact-info">
                    <a href="mailto:veriswallet@gmail.com" className="contact-link">
                        <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        veriswallet@gmail.com
                    </a>
                    <a href="https://x.com/Veriswallet" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.75-5.913 6.75h-3.308l7.73-8.835L.424 2.25h6.7l4.67 6.175L17.77 2.25h.474zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
                        </svg>
                        @Veriswallet
                    </a>
                </div>
            </div>

            <div className="footer-column">
                <h3>Community</h3>
                <div className="social-icons">
                    <a href="https://x.com/Veriswallet" target="_blank" rel="noopener noreferrer" className="social-icon" title="Twitter/X">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.75-5.913 6.75h-3.308l7.73-8.835L.424 2.25h6.7l4.67 6.175L17.77 2.25h.474zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <p>&copy; 2025 Veris Wallet. All rights reserved. Building the trust layer for Web3.</p>
        </div>
    </footer>
        </>
    )
};

export default Footer;