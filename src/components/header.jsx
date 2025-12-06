import React from "react";

const Header = () => {
  return (
    <>
        <header className="header">
           <img src="logo2.png" alt="" className="headerlogo"/>
           <p className="tagline">Wallet</p>

           <nav className="headernav">
            <a href="">Personal</a>
            <a href="">Business</a>
            <a href="">Revolution</a>
            <a href="">Company</a>
           </nav>

           <div className="headercta">
            <button className="primary-btn">Learn More</button>
            <button className="secondary-btn">Join Waitlist</button>
           </div>
        </header>
    </>
  )
};

export default Header;