
import React from "react";

const BeautyProducts = () => {
  return (
    <div className="beautyProducts">
      <div className="productCard">
        <div className="productImageWrapper">
          <img src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/orchid-mobile-2.jpg?v=1723307924&width3000" alt="Orchid" className="productImage" />
        </div>
        <div className="productInfo">
          <h2>Orchid</h2>
          <p>Orchid Antioxidant Beauty Face Oil</p>
          <button className="shopNow">SHOP NOW</button>
        </div>
      </div>
      <div className="productCard">
        <div className="productImageWrapper">
          <img src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/baku-mobile-2.jpg?v=1723307924&width=2000" alt="Bakuchiol" className="productImage" />
        </div>
        <div className="productInfo">
          <h2>Bakuchiol</h2>
          <p>Smoothing serum</p>
          <button className="shopNow">SHOP NOW</button>
        </div>
      </div>
      <div className="productCard">
        <div className="productImageWrapper">
          <img src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/green-model-mobile-2.jpg?v=1723307924&width=2000" alt="Eye Anti-Aging" className="productImage" />
        </div>
        <div className="productInfo">
          <h2>Eye Anti-Aging</h2>
          <p>Check out our Corrective eye cream Green tea</p>
          <button className="shopNow">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default BeautyProducts;
