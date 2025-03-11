import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem, toggleCartModal } from "../../../redux/slices/cartSlices";
import products from "../../../db/products";
import grayminus from "../../../assets/images/svg/grayminus.svg";
import grayplus from "../../../assets/images/svg/grayplus.svg";
import plus from "../../../assets/images/svg/plus.svg";
import minus from "../../../assets/images/svg/minus.svg";

export default function DetailProduct({ title, items }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Məhsul tapılmadı</h2>;

  const thumbnails = product.otherImages
    ? [product.image, ...product.otherImages]
    : [product.image];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animClass, setAnimClass] = useState("");

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity }));
    dispatch(toggleCartModal());
  };

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const dropdownData = [
    {
      title: "Description",
      content:
        "Firming face oil serum made of orange flower macerate and fig opuntia macerate, with natural orange and tea tree essential oils effectively supports the process of fighting the lack of skin firmness and the passage of time. Orange flower and fig opuntia macerates revitalize the skin, soothe irritation and redness, and improve the structure of the hydrolipid coat. In addition, orange essential oil has a positive effect on skin elasticity, while tea tree oil has antibacterial properties, reducing the risk of inflammation. Natural vegetable oils: argan, evening primrose and sweet almonds moisturize the skin and have antioxidant properties.This is a demo store. You can buy products like this from Mokosh.",
    },
    {
      title: "How to use",
      content:
        "Use the lotion after every hand wash and when you feel dry and tight hand skin. Depending on your needs, spread 2-4 pumps of lotion on your hands. Remember the skin between the fingers, wrists and the cuticles around the nails.",
    },
    {
      title: "Ingredients",
      content:
        "Aqua, Coco-Caprylate Caprate••, Glycerin••, Aloe Barbadensis Leaf Juice, Cucumis Sativus (Cucumber) Seed Oil, Glyceryl Stearate Citarate••, Rhus Verniciflua Peel Cera, Macadamia Ternifolia Seed Oil, Sorbitol, Xylitylglucoside••, Simmondsia Chinensis (Jojoba) Seed Oil, Cetearyl Olivate, Sorbitan Olivate, Anhydroxylitol••",
    },
    {
      title: "Delivery and return policy",
      content:
        "Our team will ship your order within 5 business days. The time it takes to receive your order depends on the shipping method chosen at checkout. We hope you to love it, but if you need to make a return, breathe easy. Returns are always free and can be done in person or by mail. ",
    },
  ];

  return (
    <div className="productDetailContainer">
      <div className="productGallery">
        <div className="thumbnailContainer">
          {thumbnails.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnailImage ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <div className="mainImageContainer">
          <img
            src={thumbnails[currentIndex]}
            alt={product.title}
            className={`mainImage ${animClass}`}
            onAnimationEnd={() => setAnimClass("")}
          />
          {currentIndex > 0 && (
            <button
              className="prevButton"
              onClick={() => setCurrentIndex((prev) => prev - 1)}
            >
              &#10094;
            </button>
          )}
          {currentIndex < thumbnails.length - 1 && (
            <button
              className="nextButton"
              onClick={() => setCurrentIndex((prev) => prev + 1)}
            >
              ❯
            </button>
          )}
        </div>
      </div>

      <div className="productInfo">
        {product.brandImage && <p className="brandLogo">{product.brand}</p>}
        <h1 className="productTitle">{product.title}</h1>
        <div className="priceContainer">
          {product.oldPrice && (
            <span className="oldPrice">${product.oldPrice}</span>
          )}
          <span className="newPrice">${product.price}</span>
          <p style={{ fontSize: "11px" }}>Tax included</p>
        </div>

        <div className="counterAndBtn">
          <div className="counter">
            <img
              src={grayminus}
              alt="Decrease"
              className="plusminusImg"
              onClick={decreaseQuantity}
            />
            <span>{quantity}</span>
            <img
              src={grayplus}
              alt="Increase"
              className="plusminusImg"
              onClick={increaseQuantity}
            />
          </div>

          <button onClick={handleAddToCart} className="addToCartButton">
            ADD TO CART
          </button>
        </div>

        <div className="detailDescriptionListCont">
          <ul className="detailDescriptionList">
            <li className="detailDescription">
              <span>•</span> 100% Vegan and Organic
            </li>
            <li className="detailDescription">
              <span>•</span> Cruelty Free and Parabens Free
            </li>
            <li className="detailDescription">
              <span>•</span> Cleanses, smooths, and nourishes the skin
            </li>
            <li className="detailDescription">
              <span>•</span> Vitamin E has an antioxidant effect
            </li>
          </ul>
        </div>

        <div className="featuresBanner">
          <img
            src="https://cdn.shopify.com/s/files/1/0566/2657/7608/files/Group_4951.png?v=16701941850"
            alt="vegan image"
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0566/2657/7608/files/Group_4950.png?v=1670194155"
            alt="shipping image"
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0566/2657/7608/files/Group_4949.png?v=1670194125"
            alt="natural image"
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0566/2657/7608/files/Group_4948.png?v=1670194084"
            alt="recycle image"
          />
        </div>

        {dropdownData.map((item, index) => (
          <div
            key={index}
            className={`detailDropdown ${
              openDropdownIndex === index ? "open" : ""
            }`}
          >
            <div
              className="detailDropdownHeader"
              onClick={() => toggleDropdown(index)}
            >
              <span>{item.title}</span>
              <img
                src={openDropdownIndex === index ? minus : plus}
                alt={openDropdownIndex === index ? "minus" : "plus"}
                className="dropdownIcon"
              />
            </div>
            <div
              className={`detailDropdownContent ${
                openDropdownIndex === index ? "open" : ""
              }`}
            >
              {openDropdownIndex === index &&
                item.content
                  .split("\n")
                  .map((line, lineIndex) => <p key={lineIndex}>{line}</p>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
