import React, { useState } from "react";
import CustomModal from "./CustomModal";
import close from "../assets/images/svg/close.svg";

const DrawerMenu = ({ isOpen, onClose, title = "Shop By", drawerStyle }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      style={drawerStyle}
    >
      <div className="drawerSubCategory">
        <ul className="subCategoryList">
        <li onClick={() => toggleCategory("shop")}>
        Shop
            <span className={`expandIcon ${activeCategory === "shop" ? "active" : ""}`}>+</span>
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
            <span className={`expandIcon ${activeCategory === "bestseller" ? "active" : ""}`}>+</span>
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
            <span className={`expandIcon ${activeCategory === "sale" ? "active" : ""}`}>+</span>
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

      {/* Footer Bölümü */}
      <div className="drawerFooter">
        <ul className="footerList">
          <li>Log in</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>
    </CustomModal>
  );
};

export default DrawerMenu;
