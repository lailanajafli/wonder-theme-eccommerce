import React, { useState, useEffect } from "react";
import CustomModal from "./CustomModal";
import plus from "../assets/images/svg/plus.svg";
import minus from "../assets/images/svg/minus.svg";

const DrawerMenu = ({ isOpen, onClose, title = "Shop By", drawerStyle = {} }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Pəncərə ölçüsünü izləyirik
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Üslub obyektinə 900px-dən aşağı olduqda width: 100% əlavə edirik
  const modalStyle = {
    ...drawerStyle,
    width: windowWidth < 900 ? "100%" : drawerStyle.width,
  };

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      style={modalStyle}
      className={`drawerModal ${isOpen ? "open" : ""}`}
    >
      <div className="drawerContainer">
        <div className="drawerSubCategory">
          <ul className="subCategoryList">
            <li onClick={() => toggleCategory("shop")}>
              Shop
              <span
                className={`expandIcon ${
                  activeCategory === "shop" ? "active" : ""
                }`}
              >
                {activeCategory === "shop" ? (
                  <img src={minus} alt="collapse" />
                ) : (
                  <img src={plus} alt="expand" />
                )}
              </span>
            </li>
            {activeCategory === "shop" && (
              <ul className="subCategoryItems">
                <li>Face Care</li>
                <li>Body Care</li>
                <li>Bath & Body</li>
                <li>Hair Care</li>
                <li>Hand Care</li>
                <li>Essential oils</li>
              </ul>
            )}
            <li onClick={() => toggleCategory("bestseller")}>
              Bestseller
              <span
                className={`expandIcon ${
                  activeCategory === "bestseller" ? "active" : ""
                }`}
              >
                {activeCategory === "bestseller" ? (
                  <img src={minus} alt="collapse" />
                ) : (
                  <img src={plus} alt="expand" />
                )}
              </span>
            </li>
            {activeCategory === "bestseller" && (
              <ul className="subCategoryItems">
                <li>Top Picks</li>
                <li>Trending</li>
                <li>New Arrivals</li>
              </ul>
            )}
            <li onClick={() => toggleCategory("sale")}>
              Sale
              <span
                className={`expandIcon ${
                  activeCategory === "sale" ? "active" : ""
                }`}
              >
                {activeCategory === "sale" ? (
                  <img src={minus} alt="collapse" />
                ) : (
                  <img src={plus} alt="expand" />
                )}
              </span>
            </li>
            {activeCategory === "sale" && (
              <ul className="subCategoryItems">
                <li>Discounted Items</li>
                <li>Clearance</li>
                <li>Limited Time Offers</li>
              </ul>
            )}
          </ul>
        </div>

        {/* Footer Section */}
        <div className="drawerFooter">
          <ul className="footerList">
            <li>Log in</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </CustomModal>
  );
};

export default DrawerMenu;
