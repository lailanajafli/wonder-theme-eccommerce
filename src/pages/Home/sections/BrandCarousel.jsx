import { useState, useEffect, useRef } from "react";
import products from "../../../db/products";

const BrandCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  const uniqueBrands = Array.from(
    new Map(products.map((p) => [p.brand, { brand: p.brand, brandImage: p.brandImage }])).values()
  );

  const carouselItems = [...uniqueBrands, ...uniqueBrands, ...uniqueBrands];

  return (
    <div className="carouselContainer">
      <div
        className={`carousel ${isPaused ? "paused" : ""}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        ref={carouselRef}
      >
        {carouselItems.map((brand, index) => (
          <div key={index} className="carouselItem">
            <img src={brand.brandImage} alt={brand.brand} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCarousel;