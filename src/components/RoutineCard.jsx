import React from "react";
import { Link } from "react-router-dom";
import cart from "../../src/assets/images/svg/cart.svg";

const RoutineCard = ({
  product,
  id,
  brand,
  image,
  border,
  title,
  price,
  style = {},
  className = "",
  showCartIcon = true,
  onCardClick = () => {},
  onCartClick = () => {},
}) => {
  const handleCartClick = (event) => {
    event.stopPropagation(); 
    event.preventDefault(); 
    onCartClick(); 
  };

  return (
    <Link
    to={`/detail/${product?.id}`}
      onClick={onCardClick}
      className={`routineCard ${className}`}
      style={style}
    >
      <div className="dailyMiniImg">
        <img src={image} alt={title} />
      </div>
      <div className="productInfo">
        <h3>{brand}</h3>
        <p>{title}</p>
        <span>{price}</span>
      </div>
      {showCartIcon && (
        <div onClick={handleCartClick} className="cartDailyIcon">
          <img src={cart} alt="Add to cart" />
        </div>
      )}
    </Link>
  );
};

export default RoutineCard;
