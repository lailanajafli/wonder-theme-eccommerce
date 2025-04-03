import React, { useRef, useState, useEffect, useCallback } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { Link } from "react-router-dom";
import RoutineCard from "../../../components/RoutineCard";
import { useDispatch } from "react-redux";
import { addItem, toggleCartModal } from "../../../redux/slices/cartSlices"; // 🔹 Redux Action-ları import edildi

const products = [
  {
    id: 1,
    brand: "BKIND",
    title: "Algae Peel-Off Mask",
    price: 115.0,
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/bkind-floral-face-2_718634ed-72d4-47b3-98aa-ab26bbc66519.jpg?v=1661113363&width=4096",
    displayTime: 0,
  },
  {
    id: 2,
    brand: "MOKOSH",
    title: "Active Toning Essence",
    price: 59.0,
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/esencja-Roza-PL.jpg?v=1660223483&width=1200",
    displayTime: 6,
  },
  {
    id: 3,
    brand: "MOKOSH",
    title: "Figa Smoothing Face Cream",
    price: 70.0,
    currency: "USD",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/products/mokosh_eb6f0013-4fcc-4f5e-8693-7200be74e429.jpg?v=1661021258&width=600",
    displayTime: 14,
  },
];

const formatPrice = (price, currency) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(price);
};

const DailyRoutine = () => {
  const dispatch = useDispatch();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [visibleProductIndex, setVisibleProductIndex] = useState(0);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => console.log("Autoplay failed:", error));
      setIsPlaying(true);
    }

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      const productToShow = products.find(
        (product) => Math.floor(currentTime) === product.displayTime
      );
      if (productToShow) {
        const index = products.indexOf(productToShow);
        setVisibleProductIndex(index);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handleAddToCart = useCallback(
    (product) => {
      dispatch(
        addItem({
          id: product.id,
          brand: product.brand,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        })
      );
      dispatch(toggleCartModal());
    },
    [dispatch]
  );



  const getTranslateX = (index) => {
    let baseOffset;
  
    if (window.innerWidth > 768) {
      baseOffset = 350;
    } else if (window.innerWidth > 480) {
      baseOffset = 280;
    } else {
      baseOffset = 210; // 480px ve altı 
    }
  
    return (index / 25 - visibleProductIndex) * baseOffset;
  };
  

  return (
    <section className="dailyRoutineSection">
      <p className="yourDailyText">Your Daily Routine</p>
      <div className="videoContainer">
        <video
          ref={videoRef}
          src="https://wonder-theme-beauty.myshopify.com/cdn/shop/videos/c/vp/acd99c7a1db84b94b47d9a6b5bef3b97/acd99c7a1db84b94b47d9a6b5bef3b97.HD-1080p-2.5Mbps-24754910.mp4?v=0"
          loop
          muted
          autoPlay
        ></video>
        <button className="playPauseBtn" onClick={togglePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <div
          className={`productsSlider ${
            visibleProductIndex >= 0 ? "visible" : ""
          }`}
        >
          {products.map((product, index) => (
            <RoutineCard
              key={product.id}
              product={product}
              brand={product.brand}
              image={product.image}
              title={product.title}
              price={formatPrice(product.price, product.currency)}
              style={{
                transform: `translateX(${getTranslateX(index)}px)`,
              }}
              onCartClick={() => handleAddToCart(product)} // 🔹 Buraya əlavə et
            />
          ))}
        </div>
      </div>
      <Link className="viewAllProducts" to="/shop">
        <p>VIEW ALL PRODUCTS</p>
      </Link>
    </section>
  );
};

export default DailyRoutine;
