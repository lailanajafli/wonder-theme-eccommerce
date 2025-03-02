import React from "react";
import { Link } from "react-router-dom";

const ShopCart = ({ data }) => {
  return (
    <div className="shopCartCont">
      <div className="productCard">
        <div className="sliderProductCont">
          <img src={data.image} alt={data.title} className="productImage" />
          <Link to={`/product/${data.id}`} className="chooseOption">
            <p>ADD TO CART</p>
          </Link>
        </div>
      </div>
      <div className="sliderTextCont">
        <h4 className="brandName">{data.brand}</h4>
        <p className="productName">{data.title}</p>
        <p className="productPrice">${data.price}</p>
      </div>
    </div>
  );
};

export default ShopCart;
