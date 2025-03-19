// import React, { useRef, useState, useEffect, useMemo } from "react";
// import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
// import RoutineCard from "../../../components/RoutineCard";
// import products from "../../../db/products";

// export default function VideoSlider({ style, showRoutineCard = true, useStaticData = false, title= "Best Skincare Products" }) {
//   const staticProducts = [
//     {
//       id: 1,
//       productVideo: "https://wonder-theme-beauty.myshopify.com/cdn/shop/videos/c/vp/5260809aed13475683dc2a595bd383f3/5260809aed13475683dc2a595bd383f3.HD-1080p-2.5Mbps-38609087.mp4?v=0",
//       image: "image1.jpg",
//       title: "Cleanse",
//       description: "Wash your face with a gentle cleanser to remove dirt and oil."
//     },
//     {
//       id: 2,
//       productVideo: "https://wonder-theme-beauty.myshopify.com/cdn/shop/videos/c/vp/ae5a7ac3efcf47f58774352d8df0e0e8/ae5a7ac3efcf47f58774352d8df0e0e8.HD-1080p-2.5Mbps-38609088.mp4?v=0",
//       title: "Moisturize",
//       description: "Use a rich moisturizer based on your skin type."
//     },
//     {
//       id: 3,
//       productVideo: "https://wonder-theme-beauty.myshopify.com/cdn/shop/videos/c/vp/b57ae292fe77451eab209f3991b09bf2/b57ae292fe77451eab209f3991b09bf2.HD-1080p-2.5Mbps-38609089.mp4?v=0",
//       title: "Massage",
//       description: "Use your fingertips in circular motions to clean thoroughly without over-scrubbing."
//     },
//     {
//       id: 4,
//       productVideo: "https://wonder-theme-beauty.myshopify.com/cdn/shop/videos/c/vp/940c2b7570244388b421df338a0f62d3/940c2b7570244388b421df338a0f62d3.HD-1080p-2.5Mbps-38609090.mp4?v=0",
//       title: "Eye Care",
//       description: "Gently apply a small amount of eye cream under your eyes."
//     }
//   ];

//   const filteredProducts = useStaticData
//     ? staticProducts
//     : products.filter((product) => product.productVideo);

//   const originalLength = filteredProducts.length;

//   const extendedProducts = useMemo(() => {
//     return [...filteredProducts, ...filteredProducts, ...filteredProducts];
//   }, [filteredProducts]);

//   const [currentIndex, setCurrentIndex] = useState(originalLength);
//   const [muted, setMuted] = useState(true);
//   const [transitionEnabled, setTransitionEnabled] = useState(true);
//   const [dragOffset, setDragOffset] = useState(0);

//   const videoRefs = useRef([]);
//   const containerRef = useRef(null);
//   const [containerWidth, setContainerWidth] = useState(0);

//   const slideWidth = 300;
//   const gap = 20;

//   const dragStartRef = useRef(0);
//   const isDraggingRef = useRef(false);

//   useEffect(() => {
//     const updateWidth = () => {
//       if (containerRef.current) {
//         setContainerWidth(containerRef.current.offsetWidth);
//       }
//     };
//     updateWidth();
//     window.addEventListener("resize", updateWidth);
//     return () => window.removeEventListener("resize", updateWidth);
//   }, []);

//   useEffect(() => {
//     videoRefs.current.forEach((video, index) => {
//       if (video) {
//         if (index % originalLength === currentIndex % originalLength) {
//           video.play();
//         } else {
//           video.pause();
//         }
//       }
//     });
//   }, [currentIndex, originalLength]);

//   const handlePrev = () => {
//     setCurrentIndex((prev) => prev - 1);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => prev + 1);
//   };

//   const toggleMute = () => {
//     setMuted((prev) => !prev);
//     if (videoRefs.current[currentIndex]) {
//       videoRefs.current[currentIndex].muted = !muted;
//     }
//   };

//   const handleTransitionEnd = () => {
//     if (currentIndex >= 2 * originalLength) {
//       setTransitionEnabled(false);
//       setCurrentIndex(originalLength);
//       requestAnimationFrame(() => {
//         requestAnimationFrame(() => setTransitionEnabled(true));
//       });
//     } else if (currentIndex <= originalLength - 1) {
//       setTransitionEnabled(false);
//       setCurrentIndex(2 * originalLength - 1);
//       requestAnimationFrame(() => {
//         requestAnimationFrame(() => setTransitionEnabled(true));
//       });
//     }
//   };

//   const baseTranslateX = useMemo(() => {
//     const offsetBefore = currentIndex * (slideWidth + gap);
//     const activeCenter = slideWidth / 2;
//     return containerWidth / 2 - (offsetBefore + activeCenter);
//   }, [containerWidth, currentIndex, slideWidth, gap]);

//   const translateX = baseTranslateX + dragOffset;
//   const realActiveIndex = currentIndex % originalLength;

//   const handlePointerDown = (e) => {
//     isDraggingRef.current = true;
//     dragStartRef.current = e.clientX || e.touches[0]?.clientX;
//     setTransitionEnabled(false);
//   };

//   const handlePointerMove = (e) => {
//     if (!isDraggingRef.current) return;
//     const clientX = e.clientX || (e.touches && e.touches[0]?.clientX);
//     const delta = clientX - dragStartRef.current;
//     setDragOffset(delta);
//   };

//   const handlePointerUp = () => {
//     if (!isDraggingRef.current) return;
//     isDraggingRef.current = false;
//     const threshold = slideWidth / 4;
//     if (dragOffset > threshold) {
//       setCurrentIndex((prev) => prev - 1);
//     } else if (dragOffset < -threshold) {
//       setCurrentIndex((prev) => prev + 1);
//     }
//     setDragOffset(0);
//     setTransitionEnabled(true);
//   };

//   return (
//     <div className="videoReels" style={style}>
//       <div className="videosContainer" ref={containerRef}>
//         <p className="bestSkincareText">{title}</p>
//         <div
//           className="videosWrapper"
//           style={{
//             transform: `translateX(${translateX}px)`,
//             transition: transitionEnabled ? "transform 0.6s ease" : "none",
//             display: "flex",
//             alignItems: "center",
//           }}
//           onTransitionEnd={handleTransitionEnd}
//           onPointerDown={handlePointerDown}
//           onPointerMove={handlePointerMove}
//           onPointerUp={handlePointerUp}
//           onPointerLeave={handlePointerUp}
//           onTouchStart={handlePointerDown}
//           onTouchMove={handlePointerMove}
//           onTouchEnd={handlePointerUp}
//         >
//           {extendedProducts.map((product, index) => (
//             <div
//               key={`${product.id}-${index}`}
//               className={`slider-card ${
//                 index % originalLength === realActiveIndex ? "active" : ""
//               }`}
//               style={{
//                 width: slideWidth,
//                 marginRight: gap,
//               }}
//             >
//               <div
//                 className={`videoSlide ${
//                   index % originalLength === realActiveIndex
//                     ? "active"
//                     : "inactive"
//                 }`}
//                 onClick={() => {
//                   const targetIndex = originalLength + (index % originalLength);
//                   setCurrentIndex(targetIndex);
//                 }}
//               >
//                 <video
//                   ref={(el) => (videoRefs.current[index] = el)}
//                   src={product.productVideo}
//                   loop
//                   muted={muted}
//                   style={{ width: "100%" }}
//                 />
//                 {index % originalLength === realActiveIndex &&
//                   (showRoutineCard ? (
//                     <RoutineCard
//                       brand={product.brand}
//                       imageUrl={product.image}
//                       name={product.title}
//                       price={`${"$"}${product.price} `}
//                       style={{ border: "1px solid #c9c9c975", width: "auto" }}
//                     />
//                   ) : (
//                     <div className="detailSliderTextCont">
//                        <p className="detailSliderTextTitle">{product.title}</p>
//                       <p className="detailSliderTextDesc">{product.description}</p>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           ))}
//         </div>
//         <button className="prevButton" onClick={handlePrev}>
//           <ChevronLeft />
//         </button>
//         <button className="nextButton" onClick={handleNext}>
//           <ChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// }














import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import RoutineCard from "../../../components/RoutineCard";
import products from "../../../db/products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function VideoSlider({ style, showRoutineCard = true, useStaticData = false, title = "Best Skincare Products" }) {
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

  const toggleMute = () => {
    setMuted((prev) => !prev);
    videoRefs.current.forEach(video => {
      if (video) video.muted = !muted;
    });
  };

  const handleSlideClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="videoReels" style={style}>
      <div className="videosContainer">
        <p className="bestSkincareText">{title}</p>
        <Swiper
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
              <div className="slider-card">
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
                        brand={product.brand}
                        imageUrl={product.image}
                        name={product.title}
                        price={`${"$"}${product.price} `}
                        style={{ border: "1px solid #c9c9c975", width: "auto", marginTop: "10px" }}
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
