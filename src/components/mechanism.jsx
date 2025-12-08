import React from "react";

const Mechanism = () => {
    return (
        <>
            <div className="mechanism" id="mechanism">
                <h2>Mechanism: Beyond Wealth</h2>
                <p>Your Integrity Score is calculated using four weighted factors that measure true on-chain credibility not just for your balance</p>
                <div class="score-badge">
                    <div class="score-number">750</div>
                    <div class="score-label">Score</div>
                </div>
                        
                <div class="pillars-grid">
                    <div class="pillar-card">
                        <div class="pillar-icon">💚</div>
                        <h3 class="pillar-name">DeFi Health</h3>
                        <p class="pillar-focus">Financial Reliability: Loan repayment history, liquidity consistency, and responsible DeFi participation</p>
                    </div>

                    <div class="pillar-card">
                        <div class="pillar-icon">🗳️</div>
                        <h3 class="pillar-name">Governance Participation</h3>
                        <p class="pillar-focus">Active Citizenship: Voting consistency, proposal creation, and meaningful contribution to protocol decisions</p>
                    </div>

                    <div class="pillar-card">
                        <div class="pillar-icon">🛡️</div>
                        <h3 class="pillar-name">Network Citizenship</h3>
                        <p class="pillar-focus">Ecosystem Safety: Audited contract interaction, malicious address avoidance, and security-conscious behavior</p>
                    </div>

                    <div class="pillar-card">
                        <div class="pillar-icon">⏳</div>
                        <h3 class="pillar-name">Asset Tenacity</h3>
                        <p class="pillar-focus">Long-Term Commitment: Holding duration over speculation, demonstrating conviction in your investments</p>
                    </div>
                </div>

            </div>
        </>
    )
};

export default Mechanism;