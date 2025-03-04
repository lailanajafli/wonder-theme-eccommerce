import React from "react";

const PerfectHair = () => {
  return (
    <div className="perfectHairCont">
      <div className="perfectHairLeft">
        <div className="perfectHairProduct">
          <img
            src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/argan-oil-2b.jpg?v=1709589561&width=2000"
            alt="perfect Hair Product"
          />
        <div className="perfectHairText">
          <h3 className="perfectHairTexth">Perfect hair with Argan Oil</h3>
          <p>Moisturizes and protects hair.</p>
          <button className="">CHECK PRODUCT</button>
        </div>
        </div>
      </div>
      <div className="perfectHairVideo">
        <video autoPlay muted loop playsInline>
          <source
            src="https://wonder-theme-beauty.myshopify.com/cdn/shop/videos/c/vp/661727d8cbec46869e114f31fa63b914/661727d8cbec46869e114f31fa63b914.HD-1080p-7.2Mbps-18395494.mp4?v=0"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default PerfectHair;
