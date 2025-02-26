import React, { useState, useEffect } from "react";
import CustomModal from "./CustomModal";
import plus from "../assets/images/svg/plus.svg";
import minus from "../assets/images/svg/minus.svg";

const DrawerMenu = ({
  isOpen,
  onClose,
  title = "Shop By",
  drawerStyle = {},
}) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            <li style={{paddingTop: "36px"}}
             className={`subCategoryListLi ${
              activeCategory === "shop" ? "active" : ""
            }`}
              onClick={() => toggleCategory("shop")}
            >
              <p> Shop</p>
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
                <li>
                  <span>Face Care</span>
                </li>
                <li>
                  <span>Body Care</span>
                </li>
                <li>
                  <span>Bath & Body</span>
                </li>
                <li>
                  <span>Hair Care</span>
                </li>
                <li>
                  <span>Hand Care</span>
                </li>
                <li>
                  <span>Essential oils</span>
                </li>
              </ul>
            )}
            <li
              className={`subCategoryListLi ${
                activeCategory === "bestseller" ? "active" : ""
              }`}
              onClick={() => toggleCategory("bestseller")}
            >
              <p>Bestseller</p>
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
                <li>
                  <span>Top Picks</span>
                </li>
                <li>
                  <span>Trending</span>
                </li>
                <li>
                  <span>New Arrivals</span>
                </li>
              </ul>
            )}
            <li
              className="subCategoryListLi"
              onClick={() => toggleCategory("sale")}
            >
              <p> Sale</p>
            </li>
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
