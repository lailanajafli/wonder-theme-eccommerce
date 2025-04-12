import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL, BASE_URL } from "../../../api/constants/base_url";
import { addItem, toggleCartModal } from "../../../redux/slices/cartSlices";
import productsData from "../../../db/products";
import grayminus from "../../../assets/images/svg/grayminus.svg";
import grayplus from "../../../assets/images/svg/grayplus.svg";
import plus from "../../../assets/images/svg/plus.svg";
import minus from "../../../assets/images/svg/minus.svg";
import axios from "axios";

export default function DetailProduct({ title, items }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  // Tüm hook'ları en başta tanımladık
  const [quantity, setQuantity] = useState(1);
  const [productD, setProduct] = useState(null); // Məhsul məlumatlarını saxlayacaq state
  const [loading, setLoading] = useState(true); // Yükləmə vəziyyəti
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animClass, setAnimClass] = useState("");
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  // API'den veri çekme işlemi ve ürün bulma işlemi
  useEffect(() => {
    const localProduct = productsData.find((p) => p.id === id);

    
    if (localProduct) {
      setProduct(localProduct);
      setLoading(false);
    } else {
      axios
        .get(`${API_URL}/products/${id}`)
        .then((response) => {
          setProduct(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Məhsul tapılmadı:", error);
          setLoading(false);
        });
    }
  }, [id]); // `id` dəyişdikdə yenidən işləsin

  // Eğer ürün yüklendiyse işlemler yapılır
  if (loading) {
    return <h2>Yüklənir...</h2>;
  }

  if (!productD) return <h2>Məhsul tapılmadı</h2>;

  const thumbnails =
  productD.otherImages && productD.otherImages.length > 0
    ? [productD.image, ...productD.otherImages]
    : [productD.image];

// URL-ləri düzəlt (backdən gələnlər üçün)
const thumbnailsWithUrl = thumbnails.map((img) =>
  img.startsWith("http")
    ? img
    : `${BASE_URL}/${img.replace(/\\/g, "/")}`
);


  // Artırma ve azaltma fonksiyonları
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  const handleAddToCart = () => {
    dispatch(addItem({ ...productD, quantity }));
    dispatch(toggleCartModal());
  };

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const dropdownData = [
    {
      title: "Description",
      content:
        "Firming face oil serum made of orange flower macerate and fig opuntia macerate...",
    },
    {
      title: "How to use",
      content: "Use the lotion after every hand wash and when you feel dry skin...",
    },
    {
      title: "Ingredients",
      content: "Aqua, Coco-Caprylate Caprate, Glycerin, Aloe Barbadensis Leaf Juice...",
    },
    {
      title: "Delivery and return policy",
      content:
        "Our team will ship your order within 5 business days. Returns are always free...",
    },
  ];

  return (
    <div className="productDetailContainer">
      <div className="productGallery">
        <div className="thumbnailContainer">
          {thumbnailsWithUrl.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnailImage ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <div className="mainImageContainer">
          <img
            src={thumbnailsWithUrl[currentIndex]}
            alt={productD.title}
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
        {productD.brandImage && <p className="brandLogo">{productD.brand}</p>}
        <h1 className="productTitle">{productD.name}{productD.title}</h1>
        <div className="priceContainer">
          {productD.oldPrice && <span className="oldPrice">${productD.oldPrice}</span>}
          <span className="newPrice">${productD.price}</span>
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
          <img src="https://cdn.shopify.com/s/files/1/0566/2657/7608/files/Group_4951.png?v=16701941850" alt="vegan image" />
          <img src="https://cdn.shopify.com/s/files/1/0566/2657/7608/files/Group_4950.png?v=1670194155" alt="shipping image" />
          <img src="https://cdn.shopify.com/s/files/1/0566/2657/7608/files/Group_4949.png?v=1670194125" alt="natural image" />
          <img src="https://cdn.shopify.com/s/files/1/0566/2657/7608/files/Group_4948.png?v=1670194084" alt="recycle image" />
        </div>

        {dropdownData.map((item, index) => (
          <div
            key={index}
            className={`detailDropdown ${openDropdownIndex === index ? "open" : ""}`}
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
            <div className={`detailDropdownContent ${openDropdownIndex === index ? "open" : ""}`}>
              {openDropdownIndex === index &&
                item.content.split("\n").map((line, lineIndex) => <p key={lineIndex}>{line}</p>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
