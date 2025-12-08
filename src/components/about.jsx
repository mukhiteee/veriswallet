import React from "react";

const About = () => {
    return (
        <>
            <div className="about" id="about">
                <div className="about-content">
                    <h2>About</h2>
                    <p>The promise of Web3 is a user-owned internet, yet its foundation is criplled by the absence pf persistent, trusthworthy identity. The Integrity Protocol is designed to solve this critical flaw. We are a decentralized reputation layer built directly into the next generation of smart wallets.</p>
                    <p>Our goal is to foster a safer, more meritocratic digital economy. By transforming fragmented on-chain activity into a quantifiable Integrity Score, we create the fundamental layer required to enable real DeFi credit, fair governance, and mass adoption.</p>
                </div>
                <div className="about-image">
                    <img src="logo.png" alt="" />
                </div>
            </div>
        </>
    )
};

export default About;