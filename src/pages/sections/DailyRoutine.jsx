import React from "react";

const DailyRoutine = () => {
  const products = [
    {
      id: 1,
      brand: "BKIND",
      name: "Algae Peel-Off Mask",
      price: "$115.00",
    },
    {
      id: 2,
      brand: "MOKOSH",
      name: "Active toning essence",
      price: "$59.00",
    },
    {
      id: 3,
      brand: "MOKOSH",
      name: "Figa smoothing face cream",
      price: "From $70.00",
    },
  ];

  return (
    <div className="dailyRoutine">
      <div className="videoWrapper">
        <video className="backgroundVideo" autoPlay muted loop>
          <source src="https://wonder-theme-beauty.myshopify.com/cdn/shop/videos/c/vp/acd99c7a1db84b94b47d9a6b5bef3b97/acd99c7a1db84b94b47d9a6b5bef3b97.HD-1080p-2.5Mbps-24754910.mp4?v=0"/>
        </video>
        <div className="overlayContent">
          <h1>Your Daily Routine</h1>
          <div className="productSlider">
            {products.map((product) => (
              <div className="productCard" key={product.id}>
                <div className="productBrand">{product.brand}</div>
                <div className="productName">{product.name}</div>
                <div className="productPrice">{product.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyRoutine;