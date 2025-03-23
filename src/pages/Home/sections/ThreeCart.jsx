import { Link } from "react-router-dom";
import React from "react";

const newproducts = [
  {
    id: 11,
    name: "Orchid",
    title: "Orchid Antioxidant Beauty Face Oil",
    image: "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/orchid-mobile-2.jpg?v=1723307924&width3000",
  },
  {
    id: 12,
    name: "Bakuchiol",
    title: "Smoothing serum",
    image: "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/baku-mobile-2.jpg?v=1723307924&width=2000",
  },
  {
    id: 8,
    name: "Eye Anti-Aging",
    title: "Corrective eye cream Green tea",
    image: "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/green-model-mobile-2.jpg?v=1723307924&width=2000",
  },
];

const ThreeCart = () => {
  return (
    <section className="threeCartsSection">
      {newproducts.map((product) => (
        <div className="threCartProductCard" key={product.id}>
          <div className="productImageWrapper">
            <img src={product.image} alt={product.name} className="productImage" />
          </div>
          <div className="productInfo">
            <h2>{product.name}</h2>
            <p>{product.title}</p>
            <Link to={`/detail/${product.id}`}>
              <button className="shopNow">SHOP NOW</button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ThreeCart;
