import { useState, useRef } from "react";
import leftRightIcon from "../../../assets/images/left-right-icon.png";

const BeforeAfterSlider = ({ beforeSrc, afterSrc }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);

  const handleMouseDown = (e) => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !sliderRef.current) return;
    const { left, width } = sliderRef.current.getBoundingClientRect();
    let clientX = e.clientX || (e.touches && e.touches[0].clientX);
    let newPosition = ((clientX - left) / width) * 100;
    newPosition = Math.max(0, Math.min(100, newPosition));
    setSliderPosition(newPosition);
  };

  return (
    <section className="afterBeforeSection">
      <div
        className="sliderContainer"
        ref={sliderRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        <div className="imageContainer">
          <img
            src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/beauty-after.jpg?v=1734648145&width=1500"
            alt="After"
            className="afterImage"
          />
          <div
            className="beforeImageContainer"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/beauty-before.jpg?v=1734648129&width=1500"
              alt="Before"
              className="beforeImage"
            />
          </div>
          <div className="sliderHandle" style={{ left: `${sliderPosition}%` }}>
            <div className="sliderCircle">
              <img src={leftRightIcon} alt="" />
            </div>
          </div>
          <div className="imageLabel beforeLabel">Before</div>
          <div className="imageLabel afterLabel">After</div>
        </div>
      </div>
      <div className="afterBeforeLeftSide">
        <h2>We know you are unique.</h2>
        <p>
          Take care of your complexion to make it healthy and radiant. In the
          range of facial care products you will find creams, scrubs, masks,
          toners, gels and much more.
        </p>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
