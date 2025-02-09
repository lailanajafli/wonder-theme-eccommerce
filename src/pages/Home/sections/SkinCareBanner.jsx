import React from "react";
import { Link } from "react-router-dom";

const SkinCareBanner = () => {
  return (
    <div className="bannerContainer">
        <p className="subTitle">Empower Your Skin care</p>
        <div className="mainText">
          The harmony between powerful
         <Link to="/shop">
            <img
              src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/mokosh-butelka-2.jpg?v=1727383527&width=200"
              alt="drop"
            />
          </Link>
          high-performance  ingredients 
         <Link to="/shop">
            <img
              src="http://wonder-theme-beauty.myshopify.com/cdn/shop/files/cream_25533314-33e0-4562-b089-d218121fe798.jpg?v=1727383538&width=200"
              alt="cream"
            />
          </Link>
          and exceptionally simple
         <Link to="/shop">
            <img
              src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/mokosh-butelka-12_9aee4959-19ad-4899-8628-412d2818893a.jpg?v=1727383516&width=200"
              alt="applying cream"
            />
          </Link>
         
          skincare routines.
        </div>
    </div>
  );
};

export default SkinCareBanner;
