import React from "react";

const Problem = () => {
    return (
        <>
            <div id="problems" className="problem">
                <h1 className="problem-header">Problems</h1>
                <div className="underline"></div>
                <div className="problem-grid">
                    <div className="problem-card">
                        <div className="problem-icon">🎨</div>
                        <h3>No Real DeFi Credit</h3>
                        <h5>Lol It Is</h5>
                        <p>Because lenders can't tell the difference between a reliable borrower and a scammer, every loan must be overcollateralized (you put up more than you borrow). This wastes billions and stalls innovation.</p>
                    </div>
                    <div className="problem-card">
                        <div className="problem-icon">📚</div>
                        <h3>Unfair DAO Governance</h3>
                        <h5>Lol It Is</h5>
                        <p>A single malicious user can create a thousands of anonymous wallets (a Sybil attack) to unfairly sway votes and compromise decentralized decisions.</p>
                    </div>
                    <div className="problem-card">
                        <div className="problem-icon">🦯</div>
                        <h3>The Scammer Problem</h3>
                        <h5>Lol It Is</h5>
                        <p>New users are thrown into a high-stakes environment where they have no way to verify if a new dApp is trusted or a scam. Trust verification is left entirely to the individual, creating a histile experience.</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Problem;