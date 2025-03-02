import React, { useState } from "react";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiryDate: "",
    securityCode: "",
    cardName: "",
    saveInfo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Successful!");
  };

  return (
    <div className="checkoutContainer">
      <div className="checkoutForm">
        <h2>Contact</h2>
        <input type="email" name="email" placeholder="Email or mobile phone number" value={formData.email} onChange={handleChange} />
        <label>
          <input type="checkbox" name="saveInfo" checked={formData.saveInfo} onChange={handleChange} /> Email me with news and offers
        </label>

        <h2>Delivery</h2>
        <select name="country" onChange={handleChange}>
          <option>United States</option>
          <option>Canada</option>
        </select>
        <div className="nameFields">
          <input type="text" name="firstName" placeholder="First name (optional)" value={formData.firstName} onChange={handleChange} />
          <input type="text" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} />
        </div>
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
        <input type="text" name="apartment" placeholder="Apartment, suite, etc. (optional)" value={formData.apartment} onChange={handleChange} />
        <div className="cityFields">
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
          <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
          <input type="text" name="zip" placeholder="ZIP code" value={formData.zip} onChange={handleChange} />
        </div>
        <h2>Payment</h2>
        <input type="text" name="cardNumber" placeholder="Card number" value={formData.cardNumber} onChange={handleChange} />
        <div className="cardDetails">
          <input type="text" name="expiryDate" placeholder="Expiration date (MM / YY)" value={formData.expiryDate} onChange={handleChange} />
          <input type="text" name="securityCode" placeholder="Security code" value={formData.securityCode} onChange={handleChange} />
        </div>
        <input type="text" name="cardName" placeholder="Name on card" value={formData.cardName} onChange={handleChange} />
        <label>
          <input type="checkbox" name="saveInfo" checked={formData.saveInfo} onChange={handleChange} /> Use shipping address as billing address
        </label>
        <button onClick={handleSubmit}>Pay now</button>
      </div>
      <div className="checkoutSummary">
        <h3>Order Summary</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} className="productImg" />
              <span>{item.title} - ${item.price.toFixed(2)}</span>
              <span>Qty: {item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="checkoutTotal">
          <p>Subtotal: ${totalPrice.toFixed(2)}</p>
          <p>Total: ${totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
