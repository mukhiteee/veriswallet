import React from "react";

const Header = () => {
  return (
    <>
        <header className="header">
           <div className="logo-tagline">
              <img src="/logo2.png" alt="" className="headerlogo"/>
              <p className="tagline">Wallet</p>
           </div>

           <nav className="headernav">
            <a href="#hero">Hero</a>
            <a href="#about">About</a>
            <a href="#problems">Problems</a>
            <a href="#solution">Solution</a>
            <a href="#mechanism">Mechanism</a>
           </nav>

           <div className="headercta">
            <a className="primary-btn" href="#about">Learn More</a>
            <a className="secondary-btn" href="#waitlist">Join Waitlist</a>
           </div>
        </header>
    </>
  )
};

export default Header;