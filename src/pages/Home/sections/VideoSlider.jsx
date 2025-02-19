import React, { useRef, useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import RoutineCard from "../../../components/RoutineCard";
import products from "../../../db/products";

export default function VideoSlider() {
  const filteredProducts = products.filter(
    (product) => product.productVideo
  );
  const originalLength = filteredProducts.length;

  const extendedProducts = useMemo(() => {
    return [...filteredProducts, ...filteredProducts, ...filteredProducts];
  }, [filteredProducts]);

  const [currentIndex, setCurrentIndex] = useState(originalLength);
  const [muted, setMuted] = useState(true);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [dragOffset, setDragOffset] = useState(0);

  const videoRefs = useRef([]);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const slideWidth = 300; 
  const gap = 20;

  const dragStartRef = useRef(0);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index % originalLength === currentIndex % originalLength) {
          video.play();
        } else {
          video.pause();
        }
      }
    });
  }, [currentIndex, originalLength]);

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const toggleMute = () => {
    setMuted((prev) => !prev);
    if (videoRefs.current[currentIndex]) {
      videoRefs.current[currentIndex].muted = !muted;
    }
  };

  const handleTransitionEnd = () => {
    if (currentIndex < originalLength) {
      setTransitionEnabled(false);
      setCurrentIndex((prev) => prev + originalLength);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setTransitionEnabled(true));
      });
    } else if (currentIndex >= 2 * originalLength) {
      setTransitionEnabled(false);
      setCurrentIndex((prev) => prev - originalLength);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setTransitionEnabled(true));
      });
    }
  };

  const baseTranslateX = useMemo(() => {
    const offsetBefore = currentIndex * (slideWidth + gap);
    const activeCenter = slideWidth / 2;
    return containerWidth / 2 - (offsetBefore + activeCenter);
  }, [containerWidth, currentIndex, slideWidth, gap]);

  const translateX = baseTranslateX + dragOffset;
  const realActiveIndex = currentIndex % originalLength;

  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    dragStartRef.current = e.clientX || e.touches[0].clientX;
    setTransitionEnabled(false);
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const delta = clientX - dragStartRef.current;
    setDragOffset(delta);
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const threshold = slideWidth / 4;
    if (dragOffset > threshold) {
      setCurrentIndex((prev) => prev - 1);
    } else if (dragOffset < -threshold) {
      setCurrentIndex((prev) => prev + 1);
    }
    setDragOffset(0);
    setTransitionEnabled(true);
  };

  return (
    <div className="videoReels">
      <button className="prevButton" onClick={handlePrev}>
        <ChevronLeft />
      </button>
      <div className="videosContainer" ref={containerRef}>
        <p className="bestSkincareText">Best Skincare Products</p>
        <div
          className="videosWrapper"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: transitionEnabled ? "transform 0.6s ease" : "none",
            display: "flex",
            alignItems: "center",
          }}
          onTransitionEnd={handleTransitionEnd}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
        >
          {extendedProducts.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className={`slider-card ${
                index % originalLength === realActiveIndex ? "active" : ""
              }`}
              style={{
                width: slideWidth,
                marginRight: gap,
              }}
            >
              <div
                className={`videoSlide ${
                  index % originalLength === realActiveIndex ? "active" : "inactive"
                }`}
                onClick={() => {
                  const targetIndex = originalLength + (index % originalLength);
                  setCurrentIndex(targetIndex);
                }}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={product.productVideo}
                  loop
                  muted={muted}
                  style={{ width: "100%" }}
                />
                {index % originalLength === realActiveIndex && (
                  <RoutineCard
                    brand={product.brand}
                    imageUrl={product.image}
                    name={product.title}
                    price={`${"$"}${product.price} `}
                    style={{ border: "1px solid #c9c9c975", width: "auto" }}
                  />
                )}
              </div>  
            </div>
          ))}
        </div>
      </div>
      <button className="nextButton" onClick={handleNext}>
        <ChevronRight />
      </button>
    </div>
  );
}
