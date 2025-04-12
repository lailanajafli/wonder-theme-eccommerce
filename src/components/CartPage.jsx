import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CustomModal from "./CustomModal";
import { API_URL, BASE_URL } from "../api/constants/base_url";
import grayminus from "../assets/images/svg/grayminus.svg";
import grayplus from "../assets/images/svg/grayplus.svg";
import binImg from "../assets/images/svg/bin.svg";
import cartSvg from "../assets/images/svg/cart.svg";
import {
  removeItem,
  increaseDecrease,
  toggleCartModal, syncCartWithProducts
} from "../redux/slices/cartSlices";
import axios from "axios";


const CartPage = ({ isOpen, title = "Your Cart", cartPageStyle = {} }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartModalOpen = useSelector((state) => state.cart.isCartModalOpen);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchAndSyncProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/products`);
        const allProducts = response.data;
  
        dispatch(syncCartWithProducts(allProducts)); // 👉 Burada çağırılır
      } catch (error) {
        console.error("Məhsulları sinxronizasiya edərkən xəta:", error);
      }
    };
  
    fetchAndSyncProducts();
  }, [dispatch]);
  

  const totalPrice = cart.reduce(
    (acc, item) => acc + (item.price ? item.price * item.quantity : 0),
    0
  );

  const modalStyle = {
    ...cartPageStyle,
    left: "auto",
    right: isOpen ? "0" : "-100%",
    transition: "transform 0.3s ease-in-out",
    width: windowWidth < 900 ? "100%" : "400px",
  };

  const closeModal = () => {
    dispatch(toggleCartModal());
  };

  return (
    <CustomModal
      isOpen={isCartModalOpen}
      onClose={closeModal}
      title={title}
      style={modalStyle}
    >
      <div className="cartPageContainer">
        {cart.length === 0 ? (
          <div className="emptyCart">
            <img className="emptyCartSvg" src={cartSvg} alt="cart" />
            <p className="emptyCartTextP">Your cart is empty.</p>
            <Link to="/" className="emptyCartLink" onClick={closeModal}>
              <p>CONTINUE SHOPPING</p>
            </Link>
          </div>
        ) : (
          <ul className="cartList">
            {cart.map((item, index) => (
              <li className="cartItem" key={item.id || index}>
                <div className="cartProductImg">
                  <img
                    src={
                      item.image.startsWith("http") ||
                      item.image.startsWith("/")
                        ? item.image
                        : `${BASE_URL}/${item.image.replace(/\\/g, "/")}`
                    }
                    alt={item.title}
                  />
                </div>
                <div className="cartProductNameContTop">
                  <h4 className="cartProductName">
                    <Link>
                      {item.name}
                      {item.title}
                    </Link>
                  </h4>
                  <div className="counterAndPrice">
                    <div className="counterBin">
                      <div className="counter">
                        <img
                          src={grayminus}
                          alt="grayminus"
                          className="plusminusImg"
                          onClick={() => {
                            if (item.quantity > 1) {
                              dispatch(
                                increaseDecrease({
                                  id: item.id,
                                  type: "decrement",
                                })
                              );
                            } else {
                              dispatch(removeItem(item.id));
                            }
                          }}
                        />
                        <span>{item.quantity}</span>
                        <img
                          src={grayplus}
                          alt="grayplus"
                          className="plusminusImg"
                          onClick={() =>
                            dispatch(
                              increaseDecrease({
                                id: item.id,
                                type: "increment",
                              })
                            )
                          }
                        />
                      </div>
                      <img
                        src={binImg}
                        alt="bin image"
                        className="removecartProduct"
                        onClick={() => dispatch(removeItem(item.id))}
                      />
                    </div>
                    <span className="cartProductPrice">${item.price}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="cartFooterBottom">
          <div className="cartInfo">
            <p className="subtotalText">Subtotal</p>
            <p className="totalPrice">${totalPrice.toFixed(2)} USD</p>
          </div>
          <p className="cartInfoBottom">
            Shipping & taxes calculated at checkout
          </p>
          <Link to="/checkout" onClick={closeModal}>
            <button
              className={`checkoutButton ${
                cart.length === 0 ? "disabled" : ""
              }`}
              disabled={cart.length === 0}
            >
              <span>CHECKOUT</span>
            </button>
          </Link>
        </div>
      </div>
    </CustomModal>
  );
};

export default CartPage;
