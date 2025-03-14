import { useState, useRef, useEffect } from "react";
import leftRightIcon from "../../../assets/images/left-right-icon.png";

const BeforeAfterSlider = ({ beforeSrc, afterSrc }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const lastTap = useRef(0);
  const isTapDragging = useRef(false);

  const updatePosition = (clientX) => {
    if (!sliderRef.current) return;
    const { left, width } = sliderRef.current.getBoundingClientRect();
    let newPosition = ((clientX - left) / width) * 100;
    newPosition = Math.max(0, Math.min(100, newPosition));
    setSliderPosition(newPosition);
  };

  const handleMove = (e) => {
    if ((!isDragging.current && !isTapDragging.current) || !sliderRef.current) return;
    let clientX = e.clientX || (e.touches && e.touches[0]?.clientX);
    if (clientX) updatePosition(clientX);
  };

  const handleDown = (e) => {
    const clientX = e.clientX || (e.touches && e.touches[0]?.clientX);
    if (clientX) updatePosition(clientX); // İlk tıklamada slider'ı hareket ettir

    const currentTime = new Date().getTime();
    if (currentTime - lastTap.current < 300) {
      isTapDragging.current = true;
    }
    lastTap.current = currentTime;

    isDragging.current = true;
    document.addEventListener("pointermove", handleMove);
    document.addEventListener("pointerup", handleUp);
  };

  const handleUp = () => {
    isDragging.current = false;
    isTapDragging.current = false;
    document.removeEventListener("pointermove", handleMove);
    document.removeEventListener("pointerup", handleUp);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerup", handleUp);
    };
  }, []);

  return (
    <section className="afterBeforeSection">
      <div
        className="sliderContainer"
        ref={sliderRef}
        onPointerDown={handleDown} // Tıklanan yere sliderı götür
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
          <div
            className="sliderHandle"
            style={{ left: `${sliderPosition}%` }}
            onPointerDown={handleDown} 
          >
            <div className="sliderCircle">
              <img src={leftRightIcon} alt="Slider Handle" />
            </div>
          </div>
          <div className="imageLabel beforeLabel">Before</div>
          <div className="imageLabel afterLabel">After</div>
        </div>
      </div>
      <div className="afterBeforeLeftSide">
        <div className="afterBeforeLefText">
        <h2 className="">We know you are unique.</h2>
        <p>
          Take care of your complexion to make it healthy and radiant. In the
          range of facial care products you will find creams, scrubs, masks,
          toners, gels and much more.
        </p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
