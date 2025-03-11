import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem, toggleCartModal } from "../../../redux/slices/cartSlices";
import products from "../../../db/products";
import grayminus from "../../../assets/images/svg/grayminus.svg";
import grayplus from "../../../assets/images/svg/grayplus.svg";

export default function DetailProduct() {
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
          <p style={{fontSize: "11px"}}>Tax icnluded</p>
        </div>

        <div className="counterAndBtn">
          <div className="counter">
            <img
              src={grayminus}
              alt="Azalt"
              className="plusminusImg"
              onClick={decreaseQuantity}
            />
            <span>{quantity}</span>
            <img
              src={grayplus}
              alt="Artır"
              className="plusminusImg"
              onClick={increaseQuantity}
            />
          </div>

          <button onClick={handleAddToCart} className="addToCartButton">
            ADD TO CART
          </button>
        </div>
        <div>
          <ul className="detailDescriptionList">
            <li className="detailDescription">
              <span>•</span>100% Vegan and Organic
            </li>
            <li className="detailDescription">
              <span>•</span>Cruelty Free and Parabens Free
            </li>
            <li className="detailDescription">
              <span>•</span>Cleanses, smooths and nourishes the skin
            </li>
            <li className="detailDescription">
              <span>•</span>Vitamin E has an antioxidant effect
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
      </div>
    </div>
  );
}
