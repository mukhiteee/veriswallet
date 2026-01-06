import React from "react";

const Team = () => {
    return (
        <section id="team" className="team-section">
            <div className="section-header">
                <h2 className="section-title">Meet The Team</h2>
                <p className="section-subtitle">Passionate builders creating the trust layer for Web3</p>
            </div>
            
            <div className="team-container">
                <div className="team-card">
                    <div className="team-image-wrapper">
                        <img src="/bigpandaweb3.jpeg" alt="bigpandaweb3 - Founder" className="team-image" />
                        <div className="team-overlay"></div>
                    </div>
                    <div className="team-info">
                        <h3 className="team-name">bigpandaweb3</h3>
                        <p className="team-role">Founder</p>
                        <p className="team-bio">Visionary leader driving innovation in Web3 identity solutions.</p>
                    </div>
                </div>

                <div className="team-card">
                    <div className="team-image-wrapper">
                        <img src="/oxbruncho.jpeg" alt="0xbruncho - Co-founder" className="team-image" />
                        <div className="team-overlay"></div>
                    </div>
                    <div className="team-info">
                        <h3 className="team-name">0xbruncho</h3>
                        <p className="team-role">Co-founder</p>
                        <p className="team-bio">Expert technologist building robust on-chain trust systems.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
