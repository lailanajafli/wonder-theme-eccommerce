import React from "react";
import { Link } from "react-router-dom";

const newproducts = [
  {
    id: 1,
    brand: "HERBIVORE",
    name: "Lapis Blue Tansy Face Oil",
    title: "Facial Oil",
    description: "New from Mokosh - body lotion",
    price: 170.0,
    currency: "USD",
    imageUrl:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/Herbivore_Lapis_BlueTansy_FaceOil_Main.webp?v=1661110797&width=500",
  },
  {
    id: 2,
    brand: "BKIND",
    name: "Conditioner bar - colored or white hair",
    title: "BKIND Soup",
    description: "Low-maintenance, high-performance",
    price: 80.0,
    currency: "USD",
    imageUrl:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/bknd-banner-1241.jpg?v=1705065416&width=750",
  },
  {
    id: 3,
    brand: "MOKOSH",
    name: "Moisturizing body lotion",
    title: "Mokosh body lotion",
    description: "Cushiony, smooth, pout-perfecting lip oil.",
    price: 65.0,
    currency: "USD",
    imageUrl:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/1_3da6ed06-b3f4-4413-adec-953c463fa313.jpg?v=1645722345&width=750",
  },
];

const NewBeauty = () => {
  return (
    <section className="newBeautyCont">
      <h2>New Beauty</h2>
      <div className="newBeautyFlex">
        {newproducts.map((newproduct) => (
          <div className="newBeautyCard">
            <div className="newBeautyImage">
              <img src={newproduct.imageUrl} alt={newproduct.name} />
            </div>
            <p className="newtitle">{newproduct.title}</p>
            <p className="newdescrp" >{newproduct.description}</p>
            <Link to="/shop" className="newBeautyLink">
              <p>CHECK NOW</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewBeauty;
