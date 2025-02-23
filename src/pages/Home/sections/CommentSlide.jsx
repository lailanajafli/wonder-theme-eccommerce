import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "Mokosh Face Cream is a game-changer. Its lightweight formula hydrates deeply without any greasiness. My skin feels nourished and looks radiant. A pure delight for sensitive skin!",
    name: "Alex K.",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/Ellipse_78_7d0b8b9d-b39e-4718-97d5-e46fe8bb1d28.jpg?v=1727383572&width=375",
  },
  {
    id: 2,
    text: "I've never used a cream that feels this good! It's so light and refreshing. Highly recommended!",
    name: "Samantha P.",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/Ellipse_79_85ddabd1-ce95-44cd-b504-6ed73dc41887.jpg?v=1727383583&width=375",
  },
  {
    id: 3,
    text: "A must-have in my skincare routine. My skin is softer and smoother than ever before.",
    name: "Michael L.",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/Ellipse_80_c1e276f4-db5f-4607-ae09-0549c8bf55bc.jpg?v=1727383592&width=375",
  },
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="testimonialSlider">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: ".prevButton",
          nextEl: ".nextButton",
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonialContent">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonialImage"
              />
              <div className="container">
                <p className="testimonialText">{testimonial.text}</p>
                <span className="testimonialName">{testimonial.name}</span>
              </div>
            </div>
            <button 
              className={`prevButton ${activeIndex === 0 ? "hidden" : ""}`}
            >
              &#10094;
            </button>
            <button
              className={`nextButton ${
                activeIndex === testimonials.length - 1 ? "hidden" : ""
              }`}
            >
              &#10095;
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
