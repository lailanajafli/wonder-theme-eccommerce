import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { addItem, toggleCartModal } from "../../../redux/slices/cartSlices"; // 🔹 Redux Action-ları import edildi
import { useDispatch } from "react-redux";

const newproducts = [
  {
    id: 13,
    brand: "HERBIVORE",
    name: "Lapis Blue Tansy Face Oil",
    title: "Facial Oil",
    description: "New from Mokosh - body lotion",
    price: 170.0,
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/1_c99f225c-fa02-47fb-af9f-c0fd52ce7381.jpg?v=1645702698&width=750",
  },
  {
    id: 14,
    brand: "BKIND",
    name: "Conditioner bar - colored or white hair",
    title: "BKIND Soup",
    description: "Low-maintenance, high-performance",
    price: 80.0,
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/bknd-banner-1241.jpg?v=1705065416&width=750",
  },
  {
    id: 15,
    brand: "MOKOSH",
    name: "Moisturizing body lotion",
    title: "Mokosh body lotion",
    description: "Cushiony, smooth, pout-perfecting lip oil.",
    price: 65.0,
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/1_3da6ed06-b3f4-4413-adec-953c463fa313.jpg?v=1645722345&width=750",
  },
];

const NewBeauty = () => {
  const dispatch = useDispatch();


      const handleAddToCart = useCallback((product) => {
        dispatch(addItem({ 
          id: product.id,
          brand: product.brand,
          title: product.title,  
          price: product.price,
          image: product.image,
          quantity: 1
        }));
        dispatch(toggleCartModal());
      }, [dispatch]);


      
  return (
    <section className="newBeautyCont">
      <h2>New Beauty Products</h2>
      <div className="newBeautyFlex">
        {newproducts.map((newproduct, index) => (
          <div className="newBeautyCard" key={index}>
            <div className="newBeautyImage">
              <img src={newproduct.image} alt={newproduct.name} />
            </div>
            <p className="newtitle">{newproduct.title}</p>
            <p className="newdescrp" >{newproduct.description}</p>
               <Link to={`/detail/${newproduct.id}`} className="newBeautyLink">
              <p>CHECK NOW</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewBeauty;
