import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import checkoutHeaderCart from "../assets/images/svg/checkoutHeaderCart.svg";

const CheckOut = () => {
  const cart = useSelector((state) => state.cart.cart);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
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
    setErrors((prev) => ({ ...prev, [name]: "" }));
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

  window.addEventListener("scroll", function () {
    var scroll = window.scrollY;

    if (scroll > 65) {
      document.querySelector(".checkoutSummary").style.top = "0";
    } else {
      document.querySelector(".checkoutSummary").style.top = "65px";
    }
  });

  return (
    <section className="checkoutContainerHeaderCont">
      <div className="checkoutContainerHeader">
        <div className="container">
          <div className="row">
            <Link className="websiteNameCont" to="/">
              <p className="websiteName">wonder-theme-beauty</p>
            </Link>
            <Link className="checkoutHeaderCart" to="">
              <img src={checkoutHeaderCart} alt="Checkout Header Cart" />
            </Link>
          </div>
        </div>
      </div>
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
              {errors.email && (
                <span className="errorText">{errors.email}</span>
              )}
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
              <input
                type="text"
                name="apartment"
                placeholder="Apartment, suite, etc. (optional)"
                value={formData.apartment}
                onChange={handleChange}
                className={errors.apartment ? "inputError" : ""}
              />
              {errors.apartment && (
                <span className="errorText">{errors.apartment}</span>
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
                {errors.city && (
                  <span className="errorText">{errors.city}</span>
                )}
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
            <label>
              <input
                type="checkbox"
                name="DeliverysaveInfo"
                checked={formData.DeliverysaveInfo}
                onChange={handleChange}
              />{" "}
            Save this information for next time
            </label>
            <h2>Payment</h2>
            <div className="paymentCreditCart">
              <div className="creditCardBlue">
                <p>Credit card</p>
                <div>
                  <img
                    src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/bogus.CIsYlO1z.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="paymentContainer">
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
                <label>
                  <input
                    type="checkbox"
                    name="paymentsaveInfo"
                    checked={formData.paymentsaveInfo}
                    onChange={handleChange}
                  />{" "}
                  Use shipping address as billing address
                </label>
              </div>
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
                    <span className="checkoutItemQuantity">
                      {item.quantity}
                    </span>
                  </div>
                  <span>
                    {item.title} - ${item.price.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="checkoutTotal">
              <div className="checkoutSubTotalCont">
                <p>
                  Subtotal <span>• {cartCount + ` items`}</span>{" "}
                </p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
              <div className="checkoutSubTotalCont">
                <p>Shipping</p>
                <p style={{ color: "#666666" }}>Enter shipping address</p>
              </div>
              <div className="checkoutTotalCont">
                <p>Total:</p>
                <p>
                  <span
                    style={{
                      color: "#666666",
                      fontSize: "13px",
                      fontWeight: "400",
                    }}
                  >
                    USD
                  </span>{" "}
                  ${totalPrice.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
