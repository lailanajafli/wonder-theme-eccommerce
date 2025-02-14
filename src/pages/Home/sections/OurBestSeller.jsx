import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper/modules";
import products from "../../../db/products";

const OurBestSeller = () => {
  // Yalnız məhsulları seç
  const allProducts = products.filter((product) => product.id);
  // Bestseller məhsulları süz
  const bestSellers = allProducts.filter((product) => product.bestSeller);

  const checkIfNew = (created_at) => {
    const currentDate = new Date();
    const productDate = new Date(created_at);
    const timeDifference = currentDate - productDate;
    const oneMonth = 30 * 24 * 60 * 60 * 1000; // 1 ay = 30 gün

    return timeDifference <= oneMonth; // 1 aydan azdırsa "New" etiketi göstər
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
              <Link to={`/product/${product.id}`} className="chooseOption">
                <p>CHOOSE OPTION</p>
              </Link>
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
