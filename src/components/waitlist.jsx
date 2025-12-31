import React, { useState } from "react";

const Wishlist = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle"); // idle, loading, success, error

    const scriptURL = 'https://script.google.com/macros/s/AKfycbz_UZymV_VjpTe1ijGiVlATiakmIedFm3_s-ySywUduNlL_JADnlHNMR98CRsZO_18/exec';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        // We use FormData to send the 'email' field to the script
        const formData = new FormData();
        formData.append("email", email);

        try {
            await fetch(scriptURL, { 
                method: "POST", 
                body: formData,
                mode: 'no-cors' // Required for Google Script cross-origin requests
            });
            
            setStatus("success");
            setEmail(""); // Clear the input
        } catch (error) {
            console.error("Error!", error.message);
            setStatus("error");
        }
    };

    return (
        <div id="section-6-waitlist-cta-midpage" className="section">
            <div className="waitlist-header" id="waitlist">
                <h2>Join Our Exclusive Waitlist!</h2>
            </div>
            <p className="waitlist-subtext">
                {status === "success" 
                    ? "🎉 You've been added! Check your inbox soon." 
                    : "Be the first to know about updates and opportunities for a more inclusive financial future."
                }
            </p>
        
            {status !== "success" && (
                <form className="waitlist-form" onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        name="email"
                        className="waitlist-input" 
                        placeholder="Enter your email address" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        disabled={status === "loading"}
                    />
                    <button 
                        type="submit" 
                        className="waitlist-button"
                        disabled={status === "loading"}
                    >
                        {status === "loading" ? "Joining..." : "Join Waitlist"}
                    </button>
                </form>
            )}
            
            {status === "error" && (
                <p style={{ color: "#ff4d4d", marginTop: "10px", fontSize: "0.9rem" }}>
                    Something went wrong. Please try again.
                </p>
            )}
        </div>
    );
};

export default Wishlist;