import React, { useState, useEffect } from "react";
import CustomModal from "./CustomModal";
import plus from "../assets/images/svg/plus.svg";
import minus from "../assets/images/svg/minus.svg";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

const draweProducts = [
  { name: "Firming face serum Orange", image: "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/mokosh-1.jpg?v=1673362597&width=800" },
  { name: "Moisturizing hand lotion", image: "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/mokosh-2.jpg?v=1673362798&width=800" },
  { name: "Floral face moisturized", image: "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/bkind-3.jpg?v=1673362986&width=800" },
  { name: "Body salt scrub 300g", image: "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/mokosh-4.jpg?v=1673363219&width=800" },
  { name: "Nourishing hand balm", image: "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/bkind-5.jpg?v=1673363672&width=800" },
];

const DrawerMenu = ({ isOpen, onClose, title = "Shop By", drawerStyle = {} }) => {
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
    <CustomModal isOpen={isOpen} onClose={onClose} title={title} style={modalStyle} className={`drawerModal ${isOpen ? "open" : ""}`}>
      <div className="drawerContainer">
        <div className="drawerSubCategory">
          <ul className="subCategoryList">
            <li className={`subCategoryListLi ${activeCategory === "shop" ? "active" : ""}`} onClick={() => toggleCategory("shop")}>
              <p>Shop</p>
              <span className={`expandIcon ${activeCategory === "shop" ? "active" : ""}`}>
                {activeCategory === "shop" ? <img src={minus} alt="collapse" /> : <img src={plus} alt="expand" />}
              </span>
            </li>
            {activeCategory === "shop" && (
              <ul className="subCategoryItems">
                <li><span>Face Care</span></li>
                <li><span>Body Care</span></li>
                <li><span>Bath & Body</span></li>
                <li><span>Hair Care</span></li>
                <li><span>Hand Care</span></li>
                <li><span>Essential oils</span></li>
              </ul>
            )}
            <li className={`subCategoryListLi ${activeCategory === "bestseller" ? "active" : ""}`} onClick={() => toggleCategory("bestseller")}>
              <p>Bestseller</p>
              <span className={`expandIcon ${activeCategory === "bestseller" ? "active" : ""}`}>
                {activeCategory === "bestseller" ? <img src={minus} alt="collapse" /> : <img src={plus} alt="expand" />}
              </span>
            </li>
            {activeCategory === "bestseller" && (
              <div className="bestsellerScrollContainer">
                <div className="scrollable">
                  {draweProducts.map((product, index) => (
                    <div key={`${product.id}-${index}`} className="drawerSlideCont">
                      <div className="drawerSlideImage">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className="drawerSlideTextCont">
                        <p className="drawerSlideText">{product.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <li className="subCategoryListLi" onClick={() => toggleCategory("sale")}>
              <p>Sale</p>
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
