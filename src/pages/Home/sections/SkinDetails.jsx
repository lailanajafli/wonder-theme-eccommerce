import React, { useState } from "react";
import { Link } from "react-router-dom";
import RoutineCard from "../../../components/RoutineCard";

const products = [
  {
    id: 1,
    brand: "BKIND",
    name: "Algae Peel-Off Mask",
    price: 115.0,
    currency: "USD",
    imageUrl:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/bkind-floral-face-2_718634ed-72d4-47b3-98aa-ab26bbc66519.jpg?v=1661113363&width=4096",
    position: { top: "41%", left: "58%" },
    cardPosition: "translate(-47%, calc(100% + -45px))",
  },
  {
    id: 2,
    brand: "MOKOSH",
    name: "Active Toning Essence",
    price: 59.0,
    currency: "USD",
    imageUrl:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/esencja-Roza-PL.jpg?v=1660223483&width=1200",
    position: { top: "10%", left: "51%" },
    cardPosition: "translate(-50%, calc(100% - -32px))",
  },
  {
    id: 3,
    brand: "MOKOSH",
    name: "Figa Smoothing Face Cream",
    price: 70.0,
    currency: "USD",
    imageUrl:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/mokosh_eb6f0013-4fcc-4f5e-8693-7200be74e429.jpg?v=1661021258&width=600",
    position: { top: "83%", left: "29%" },
    cardPosition: "translate(-46%, calc(-100% - -82%))",
  },
];

const SkinDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOutsideClick = (e) => {
    if (
      !e.target.closest(".routine-card-container") &&
      !e.target.closest(".hotspot")
    ) {
      setSelectedProduct(null);
    }
  };

  return (
    <section className="dailyRoutineSection" onClick={handleOutsideClick}>
      <p className="yourDailyText">Love Your Skin</p>
      <div className="girlFace">
        <img
          src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/image-beauty-lookbook-desktop.jpg?v=1725614375&width=3000"
          alt="Girl Face"
        />
        {products.map((product) => (
          <div
            key={product.id}
            className="hotspot"
            style={{
              top: product.position.top,
              left: product.position.left,
              position: "absolute",
            }}
            onClick={(e) => {
              e.stopPropagation();
              if (selectedProduct && selectedProduct.id === product.id) {
                setSelectedProduct(null);
              } else {
                setSelectedProduct(product);
              }
            }}
          />
        ))}
      </div>

      {selectedProduct && (
        <div
          className="routine-card-container"
          style={{
            position: "absolute",
            top: selectedProduct.position.top,
            left: selectedProduct.position.left,
            transform: selectedProduct.cardPosition, 
            zIndex: 999,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <RoutineCard
            brand={selectedProduct.brand}
            imageUrl={selectedProduct.imageUrl}
            name={selectedProduct.name}
            price={`$${selectedProduct.price}`}
            style={{
              border: "1px solid #c9c9c975",
              width: "100%",
              minWidth: "50px",
              maxWidth: "320px",
              background: "white",
              padding: "20px",
              borderRadius: "10px",
            }}
          />
        </div>
      )}

      <Link className="viewAllProducts" to="/shop">
        <p>VIEW ALL PRODUCTS</p>
      </Link>
    </section>
  );
};

export default SkinDetails;
