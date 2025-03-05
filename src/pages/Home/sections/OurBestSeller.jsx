import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper/modules";
import { addItem } from "../../../redux/slices/cartSlices"; // Redux'tan addItem action'u getirildi
import products from "../../../db/products";

const OurBestSeller = () => {
  const dispatch = useDispatch(); // Redux dispatch kullanımı

  const allProducts = products.filter((product) => product.id);
  const bestSellers = allProducts.filter((product) => product.bestSeller);

  const checkIfNew = (created_at) => {
    const currentDate = new Date();
    const productDate = new Date(created_at);
    const timeDifference = currentDate - productDate;
    const oneMonth = 30 * 24 * 60 * 60 * 1000;

    return timeDifference <= oneMonth;
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="bestsellersSection">
      <h2 className="sectionTitle">Our Bestsellers</h2>
      <Swiper
        modules={[Navigation, Scrollbar]}
        navigation
        scrollbar={{ draggable: true }}
        spaceBetween={20}
        slidesPerView={5}
        breakpoints={{
          1024: { slidesPerView: 4 },
          668: { slidesPerView: 2 },
          200: { slidesPerView: 1 },
        }}
        className="bestsellersSlider"
      >
        {bestSellers.map((product) => (
          <SwiperSlide key={product.id} className="productCard">
            {checkIfNew(product.created_at) && (
              <span className="newLabel">New</span>
            )}
            <div className="sliderProductCont">
              <img
                src={product.image}
                alt={product.title}
                className="productImage"
              />
              <button
                onClick={() => handleAddToCart(product)}
                className="chooseOption"
              >
                <p>ADD TO CART</p>
              </button>
            </div>
            <div className="sliderTextCont">
              <h4 className="brandName">{product.brand}</h4>
              <p className="productName">{product.title}</p>
              <p className="productPrice">${product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-scrollbar"></div>

      <div className="viewAllContainer">
        <Link className="viewAllButton" to="/shop">
          <p>VIEW ALL</p>
        </Link>
      </div>
    </div>
  );
};

export default OurBestSeller;
