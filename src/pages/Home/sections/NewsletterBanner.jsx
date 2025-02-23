import React, { useState } from "react";

const NewsletterBanner = () => {
  const [subscribed, setSubscribed] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log("Email submitted:", email);
    setSubscribed(true);

  };

  return (
    <div className="newsletterSection">
      <h2 className="newsletterTitle">Get 20% off your first order</h2>
      <p className="newsletterSubtitle">
        Join our email list for exclusive offers and the latest news.
      </p>

      <form className="newsletterForm" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          className="newsletterInput"
          placeholder="Email"
          required
        />
        <button type="submit" className="newsletterButton">
          SUBSCRIBE
        </button>
      </form>

      {subscribed && (
        <p className="subscriptionMessage">Thanks for subscribing!</p>
      )}
    </div>
  );
};

export default NewsletterBanner;