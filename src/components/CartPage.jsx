import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CustomModal from "./CustomModal";
import grayminus from "../assets/images/svg/grayminus.svg";
import grayplus from "../assets/images/svg/grayplus.svg";
import binImg from "../assets/images/svg/bin.svg";

import {
  removeItem,
  increaseDecrease,
  clearCart,
} from "../redux/slices/cartSlices";

const CartPage = ({
  isOpen,
  onClose,
  title = "Your Cart",
  cartPageStyle = {},
}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const modalStyle = {
    ...cartPageStyle,
    left: "auto",
    right: isOpen ? "0" : "-100%",
    width: windowWidth < 900 ? "100%" : "400px",
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      style={modalStyle}
    >
      <div className="cartPageContainer">
      {cart.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <ul className="cartList">
          {cart.map((item, index) => (
            <li className="cartItem" key={item.id}>
              <div className="cartProductImg">
                <img src={item.image} alt={item.name} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <p className="cartProductName">{item.title}</p>
                <div className="counterBin">
                  <div className="counter">
                    <img
                      src={grayminus}
                      alt="grayminus"
                      className="plusminusImg"
                      style={{ fill: "rgb(215, 215, 215)" }}
                      onClick={() =>
                        dispatch(increaseDecrease({ item, type: "increment" }))
                      }
                    />
                    <span>{item.quantity}</span>
                    <img
                      src={grayplus}
                      alt="grayplus"
                      className="plusminusImg"
                      style={{ fill: "rgb(215, 215, 215)" }}
                      onClick={() =>
                        dispatch(increaseDecrease({ item, type: "decrement" }))
                      }
                    />
                  </div>
                  <img
                    src={binImg}
                    alt=" bin image"
                    className="removecartProduct"
                    onClick={() => dispatch(removeItem(item.id))}
                  />
                </div>
              </div>
              <span className="cartProductPrice">{item.price}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="cartFooterBottom">
      <div className="cartInfo">
        <p className="subtotalText">Subtotal</p>
        <p className="totalPrice">{totalPrice.toFixed(2)}</p>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        className="checkoutButton"
      >
        <p>CHECK OUT</p>
      </button>
      </div>
      </div>
    </CustomModal>
  );
};

export default CartPage;
