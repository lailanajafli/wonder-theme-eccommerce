import React from "react";
import { Link } from "react-router-dom";
import cart from "../../src/assets/images/svg/cart.svg";

const RoutineCard = ({
  brand,
  imageUrl,
  border,
  name,
  price,
  style = {},
  className = "",
  linkTo = "/shop",
  showCartIcon = true,
  onCardClick = () => {},
}) => {
  return (
    <Link
      to={linkTo}
      onClick={onCardClick}
      className={`routineCard ${className}`}
      style={style}
    >
      <div className="dailyMiniImg">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="productInfo">
        <h3>{brand}</h3>
        <p>{name}</p>
        <span>{price}</span>
      </div>
      {showCartIcon && (
        <div className="cartDailyIcon">
          <img src={cart} alt="Add to cart" />
        </div>
      )}
    </Link>
  );
};

export default RoutineCard;
