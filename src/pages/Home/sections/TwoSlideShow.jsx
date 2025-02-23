import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

const slides = [
  {
    id: 1,
    leftImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/mokosh-product-transparent-4.png?v=1738085795&width=2000",
    rightImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/image-2-desktop-beauty.jpg?v=1738084909&width=2000",
    title: "Active Toning Essence",
    price: "$59.00",
    rightText: "Revitalizes the Skin!",
    bgColor: "#ECF5E9",
  },
  {
    id: 2,
    leftImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/mokosh-transparent-cream-2.png?v=1738085766&width=2000",
    rightImage:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/image-3.jpg?v=1738006861&width=20000",
    title: "Another Product",
    price: "$69.00",
    rightText: "Improves Skin Hydration!",
    bgColor: "#F0EDE5", 
  },
];
const leftVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const rightVariants = {
  initial: (dir) => ({
    x: dir === 0 ? 0 : -800,
  }),
  animate: { x: 0 },
  exit: (dir) => ({
    x: dir === 0 ? 800 : 0,
  }),
};

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      nextSlide();
    } else if (info.offset.x > 100) {
      prevSlide();
    }
  };

  return (
    <section className="twoSlideShowCont">
      <div className="sliderWrapper">
        <div
          className="leftPanel"
          style={{ background: slides[currentIndex].bgColor }}
        >
          {currentIndex > 0 && (
            <button
              className="navigationButton previousButton"
              onClick={prevSlide}
              aria-label="Önceki Ürün"
            >
              <ChevronLeft strokeWidth={1} size={45} />
            </button>
          )}
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentIndex].id}
              className="slideItem leftPanelContent"
              variants={leftVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.1 }}
            >
              <div className="imageWrapper">
                <img
                  src={slides[currentIndex].leftImage}
                  alt={`${slides[currentIndex].title} Left Visual`}
                />
              </div>
              <p>{slides[currentIndex].title}</p>
              <p>{slides[currentIndex].price}</p>
            </motion.div>
          </AnimatePresence>
          {currentIndex < slides.length - 1 && (
            <button
              className="navigationButton nextButton"
              onClick={nextSlide}
              aria-label="Sonraki Ürün"
            >
              <ChevronRight strokeWidth={1} size={45} />
            </button>
          )}
        </div>

        <div className="rightPanel">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentIndex].id}
              className="slideItem rightPanelContent"
              custom={direction}
              variants={rightVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              transition={{ duration: 0.1 }}
            >
              <div className="imageWrapper">
                <img
                  src={slides[currentIndex].rightImage}
                  alt={`${slides[currentIndex].title} Right Visual`}
                />
              </div>
              <div className="promoText">
                <h2>{slides[currentIndex].rightText}</h2>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="paginationDots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dotIndicator ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}