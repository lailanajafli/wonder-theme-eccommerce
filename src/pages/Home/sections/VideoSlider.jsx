import React, { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import RoutineCard from "../../../components/RoutineCard";
import products from "../../../db/products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useDispatch } from "react-redux";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { addItem, toggleCartModal } from "../../../redux/slices/cartSlices"; 


export default function VideoSlider({ style, showRoutineCard = true, useStaticData = false, title = "Best Skincare Products" }) {
    const dispatch = useDispatch();
  
  const staticProducts = [
    {
      id: 1,
      productVideo: "https://wonder-theme-beauty.myshopify.com/cdn/shop/videos/c/vp/5260809aed13475683dc2a595bd383f3/5260809aed13475683dc2a595bd383f3.HD-1080p-2.5Mbps-38609087.mp4?v=0",
      image: "image1.jpg",
      title: "Cleanse",
      description: "Wash your face with a gentle cleanser to remove dirt and oil."
    },
    {
      id: 2,
      productVideo: "https://wonder-theme-beauty.myshopify.com/cdn/shop/videos/c/vp/ae5a7ac3efcf47f58774352d8df0e0e8/ae5a7ac3efcf47f58774352d8df0e0e8.HD-1080p-2.5Mbps-38609088.mp4?v=0",
      title: "Moisturize",
      description: "Use a rich moisturizer based on your skin type."
    },
    {
      id: 3,
      productVideo: "https://wonder-theme-beauty.myshopify.com/cdn/shop/videos/c/vp/b57ae292fe77451eab209f3991b09bf2/b57ae292fe77451eab209f3991b09bf2.HD-1080p-2.5Mbps-38609089.mp4?v=0",
      title: "Massage",
      description: "Use your fingertips in circular motions to clean thoroughly without over-scrubbing."
    },
    {
      id: 4,
      productVideo: "https://wonder-theme-beauty.myshopify.com/cdn/shop/videos/c/vp/940c2b7570244388b421df338a0f62d3/940c2b7570244388b421df338a0f62d3.HD-1080p-2.5Mbps-38609090.mp4?v=0",
      title: "Eye Care",
      description: "Gently apply a small amount of eye cream under your eyes."
    },
    {
      id: 5,
      productVideo: "https://wonder-theme-beauty.myshopify.com/cdn/shop/videos/c/vp/5260809aed13475683dc2a595bd383f3/5260809aed13475683dc2a595bd383f3.HD-1080p-2.5Mbps-38609087.mp4?v=0",
      image: "image1.jpg",
      title: "Cleanse",
      description: "Wash your face with a gentle cleanser to remove dirt and oil."
    },
    {
      id: 6,
      productVideo: "https://wonder-theme-beauty.myshopify.com/cdn/shop/videos/c/vp/ae5a7ac3efcf47f58774352d8df0e0e8/ae5a7ac3efcf47f58774352d8df0e0e8.HD-1080p-2.5Mbps-38609088.mp4?v=0",
      title: "Moisturize",
      description: "Use a rich moisturizer based on your skin type."
    },
    {
      id: 7,
      productVideo: "https://wonder-theme-beauty.myshopify.com/cdn/shop/videos/c/vp/b57ae292fe77451eab209f3991b09bf2/b57ae292fe77451eab209f3991b09bf2.HD-1080p-2.5Mbps-38609089.mp4?v=0",
      title: "Massage",
      description: "Use your fingertips in circular motions to clean thoroughly without over-scrubbing."
    },
    {
      id: 8,
      productVideo: "https://wonder-theme-beauty.myshopify.com/cdn/shop/videos/c/vp/940c2b7570244388b421df338a0f62d3/940c2b7570244388b421df338a0f62d3.HD-1080p-2.5Mbps-38609090.mp4?v=0",
      title: "Eye Care",
      description: "Gently apply a small amount of eye cream under your eyes."
    }
  ];
  
  const filteredProducts = useStaticData ? staticProducts : products.filter((product) => product.productVideo);
  const [muted, setMuted] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0); 
  const videoRefs = useRef([]);
  const swiperRef = useRef(null);  // Swiper referansı ekle

  const toggleMute = () => {
    setMuted((prev) => !prev);
    videoRefs.current.forEach(video => {
      if (video) video.muted = !muted;
    });
  };



  const handleSlideClick = (index) => {
    setActiveSlide(index);
    swiperRef.current?.slideToLoop(index); // aktif slayta kaydır
  };
  


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
    <div className="videoReels" style={style}>
      <div className="videosContainer">
        <p className="bestSkincareText">{title}</p>
        <Swiper
         onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerGroup={1}
          slidesPerView={5}
          centeredSlides={true}
          pagination={true}
          navigation={true}
          loop={true}
          breakpoints={{
            1200: { slidesPerView: 5 }, 
            1024: { slidesPerView: 4 }, 
            768: { slidesPerView: 3 },  
            480: { slidesPerView: 2 }, 
            0: { slidesPerView: 1 },     
          }}
          onSlideChange={(swiper) => {
            setActiveSlide(swiper.realIndex); 
            videoRefs.current.forEach((video, index) => {
              if (video) index === swiper.realIndex ? video.play() : video.pause();
            });
          }}
        >
          {filteredProducts.map((product, index) => (
            <SwiperSlide key={product.id} className={index === activeSlide ? "activeSlide" : ""} onClick={() => handleSlideClick(index)}>
              <div className={`slider-card ${index === activeSlide ? "activeSlide" : ""}`}>
                <div className="videoSlide">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={product.productVideo}
                    loop
                    muted={muted}
                    className={index === activeSlide ? "activeVideo" : ""}
                  />
                  {index === activeSlide &&
                    (showRoutineCard ? (
                      <RoutineCard
                      key={product.id}
                      product={product}
                        brand={product.brand}
                        image={product.image}
                        title={product.title}
                        price={`${"$"}${product.price} `}
                        style={{ border: "1px solid #c9c9c975", width: "auto", marginTop: "10px" }}
                        onCartClick={() => handleAddToCart(product)}
                      />
                    ) : (
                      <div className="detailSliderTextCont">
                        <p className="detailSliderTextTitle">{product.title}</p>
                        <p className="detailSliderTextDesc">{product.description}</p>
                      </div>
                    ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
