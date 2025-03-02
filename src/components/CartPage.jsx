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
  title = "Shop By",
  cartPageStyle = {},
}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Window boyutu değiştiğinde güncelleme
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toplam fiyat hesaplama
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Modal stilini dinamik olarak ayarlama
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
      <h2>Sepet</h2>
      {cart.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <ul className="cartList">
          {cart.map((item, index) => (
            <li className="cartItem" key={item.id}>
              <p className="lineNumber">{index + 1}</p>
              <div className="cartProductImg">
                <img src={item.image} alt={item.name} />
              </div>
              <h4 className="cartProductName">
                <Link>{item.name}</Link>
              </h4>
              <p className="cartProductDetails">{item.details}</p>
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
          <img src={binImg} alt=" bin image" className="removecartProduct"
                onClick={() => dispatch(removeItem(item.id))} />
              <span className="cartProductPrice">{item.price} AZN</span>
            </li>
          ))}
        </ul>
      )}
      <div className="cartInfo">
        <h3>
          Total price: <span>{totalPrice.toFixed(2)} AZN</span>
        </h3>
        <p className="clear" onClick={() => dispatch(clearCart())}>
          Clear cart
        </p>
      </div>
    </CustomModal>
  );
};

export default CartPage;
