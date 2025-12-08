import React from "react";

const Wishlist = () => {
    return (
        <>
            <div id="section-6-waitlist-cta-midpage" className="section">
                <div className="waitlist-header" id="waitlist">
                    <h2>Join Our Exclusive Waitlist!</h2>
                </div>
                <p className="waitlist-subtext">Be the first to know about updates and opportunities for a more inclusive financial future.</p>
            
                <form className="waitlist-form">
                    <input type="email" className="waitlist-input" placeholder="Enter your email address" required />
                    <button type="submit" className="waitlist-button">Join Waitlist</button>
                </form>
            </div>
        </>
    )
};

export default Wishlist;