import React, { useState } from "react";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Hata varsa temizle
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.lastName) newErrors.lastName = "Enter a last name";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.zip) newErrors.zip = "ZIP code is required";
    if (!formData.cardNumber) newErrors.cardNumber = "Card number is required";
    if (!formData.expiryDate)
      newErrors.expiryDate = "Expiration date is required";
    if (!formData.securityCode)
      newErrors.securityCode = "Security code is required";
    if (!formData.cardName) newErrors.cardName = "Cardholder name is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Payment Successful!");
    }
  };

  return (
    <div className="checkoutContainer">
      <div className="checkoutForm">
        <div style={{ margin: "unset" }} className="container">
          <h2>Contact</h2>
          <div className="inputErrorCont">
            <input
              type="email"
              name="email"
              placeholder="Email or mobile phone number"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "inputError" : ""}
            />
            {errors.email && <span className="errorText">{errors.email}</span>}
          </div>
          <label>
            <input
              type="checkbox"
              name="saveInfo"
              checked={formData.saveInfo}
              onChange={handleChange}
            />{" "}
            Email me with news and offers
          </label>

          <h2>Delivery</h2>
          <select name="country" onChange={handleChange}>
            <option>United States</option>
            <option>Canada</option>
          </select>
          <div className="nameFields">
            <div className="inputErrorCont">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? "inputError" : ""}
              />
              {errors.firstName && (
                <span className="errorText">{errors.firstName}</span>
              )}
            </div>
            <div className="inputErrorCont">
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? "inputError" : ""}
              />
              {errors.lastName && (
                <span className="errorText">{errors.lastName}</span>
              )}
            </div>
          </div>

          <div className="inputErrorCont">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className={errors.address ? "inputError" : ""}
            />
            {errors.address && (
              <span className="errorText">{errors.address}</span>
            )}
          </div>
          <div className="cityFields">
            <div className="inputErrorCont">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className={errors.city ? "inputError" : ""}
              />
              {errors.city && <span className="errorText">{errors.city}</span>}
            </div>
            <div className="inputErrorCont">
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className={errors.state ? "inputError" : ""}
              />
              {errors.state && (
                <span className="errorText">{errors.state}</span>
              )}
            </div>

            <div className="inputErrorCont">
              <input
                type="text"
                name="zip"
                placeholder="ZIP code"
                value={formData.zip}
                onChange={handleChange}
                className={errors.zip ? "inputError" : ""}
              />
              {errors.zip && <span className="errorText">{errors.zip}</span>}
            </div>
          </div>

          <h2>Payment</h2>
          <div className="inputErrorCont">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card number"
              value={formData.cardNumber}
              onChange={handleChange}
              className={errors.cardNumber ? "inputError" : ""}
            />
            {errors.cardNumber && (
              <span className="errorText">{errors.cardNumber}</span>
            )}
          </div>
          <div className="cardDetails">
            <div className="inputErrorCont">
              <input
                type="text"
                name="expiryDate"
                placeholder="Expiration date (MM / YY)"
                value={formData.expiryDate}
                onChange={handleChange}
                className={errors.expiryDate ? "inputError" : ""}
              />
              {errors.expiryDate && (
                <span className="errorText">{errors.expiryDate}</span>
              )}
            </div>
            <div className="inputErrorCont">
              <input
                type="text"
                name="securityCode"
                placeholder="Security code"
                value={formData.securityCode}
                onChange={handleChange}
                className={errors.securityCode ? "inputError" : ""}
              />
              {errors.securityCode && (
                <span className="errorText">{errors.securityCode}</span>
              )}
            </div>
          </div>
          <div className="inputErrorCont">
            <input
              type="text"
              name="cardName"
              placeholder="Name on card"
              value={formData.cardName}
              onChange={handleChange}
              className={errors.cardName ? "inputError" : ""}
            />
            {errors.cardName && (
              <span className="errorText">{errors.cardName}</span>
            )}
          </div>
          <button onClick={handleSubmit}>Pay now</button>
        </div>
      </div>
      <div className="checkoutSummary">
        <div style={{ margin: "unset" }} className="container">
          <h3>Order Summary</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div className="checkoutItemImg">
                  <img src={item.image} alt={item.name} />
                  <span className="checkoutItemQuantity">{item.quantity}</span>
                </div>
                <span>
                  {item.title} - ${item.price.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className="checkoutTotal">
            <p>Subtotal: ${totalPrice.toFixed(2)}</p>
            <p>Total: ${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
