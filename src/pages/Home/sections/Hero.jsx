import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setWindowHeight(window.innerHeight);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scale = Math.max(0.4, 1 - scrollY / windowHeight);
  const translateY = Math.min(scrollY * 0.6, windowHeight * 0.47);
  const width = Math.max(270, 700 - (scrollY / windowHeight) * 460);
  const opacity = Math.max(0, 1 - (scrollY  / windowHeight) * 2);

  return (
    <section className="hero">
      <div className="heroVideo">
        <video autoPlay muted loop playsInline>
          <source
            src="https://wonder-theme-beauty.myshopify.com/cdn/shop/videos/c/vp/063ff447dae24d7c9b3b608befaf811e/063ff447dae24d7c9b3b608befaf811e.HD-720p-1.6Mbps-39946194.mp4?v=0"
            type="video/mp4"
          />
        </video>
      </div>
      <div
        className="heroBeauty"
        style={{
          transform: `translate(-50%, calc(-50% + ${translateY}px)) scale(${scale})`,
        }}
      >
        <img
          src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/Path_850.svg?v=1707730148&width=113"
          alt="Beauty"
          style={{ width: `${width}px` }}
        />
      </div>
      <div className="skincareBeginCont" style={{ opacity }}>
        <Link to="/shop">WHERE SKINCARE BEGINS</Link>
        <div className="skincareBeginDown">
          <FontAwesomeIcon className="blackBar" style={{color: "white"}} icon={faChevronDown} size="xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;