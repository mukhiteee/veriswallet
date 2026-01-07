import React from "react";

const Shero = () => {
    const handleLearnMore = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleJoinWaitlist = () => {
        const waitlistSection = document.getElementById('waitlist');
        if (waitlistSection) {
            waitlistSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="hero" id="hero">
                <div className="herobg"></div>
                <h1 className="headline">Establishing Trust As The Core Web3 Primitive</h1>
                <p className="tagline2">Persistent, Trustworthy and on-chain identity</p>
                <div className="herocta">
                    <button className="hero-p-btn" onClick={handleLearnMore}>Learn More</button>
                    <button className="hero-s-btn" onClick={handleJoinWaitlist}>Join Waitlist</button>
                </div>
            </div>
        </>
    )
};

export default Shero;