import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollWoman = () => {
  useEffect(() => {
    gsap.to(".landingSection", {
      scrollTrigger: {
        trigger: ".landingSection",
        start: "center center",
        end: "+=310%",
        pin: true,
        pinSpacing: false,
        scrub: 0.1, // Daha yavaş senkronizasyon
        markers: false,
      },
    });

    // Birinci seklin animasyonu
    gsap.fromTo(
      ".scrollimgone",
      {
        y: "100%", rotate: 0
      },
      {
        y: "-100%",
        rotate: -15,
        duration: 40, 
        ease: "slow(0.2, 0.2, false)", 
        scrollTrigger: {
          trigger: ".imageContainer",
          start: "top center",
          scrub: 0.05, 
          end: "+=200%", 
          markers: false,
        },
      }
    );

    // İkinci sekil animasyonu
    gsap.fromTo(
      ".scrollimgtwo",
      {
        y: "100%", rotate: 0
      },
      {
        y: "-100%",
        rotate: 15,
        duration: 40, 
        ease: "slow(0.2, 0.2, false)", 
        scrollTrigger: {
          trigger: ".imageContainer",
          scrub: 0.05,
          start: "top center-=80%",
          end: "+=200%", 
          markers: false,
        },
      }
    );
  }, []);

  return (
    <section className="scrollWoman">
      <div className="landingSection">
        <div className="container">
          <div className="row">
            <div className="pin">
              <h2>Where Every Skincare Moment Counts.</h2>
              <p>
                At Beauty, we believe that skincare isn't just a routine; it's a
                journey of self-care and self-discovery. Our curated selection
                of premium skincare products is designed to elevate your beauty
                regimen, offering you a sanctuary of indulgence and
                transformation.
              </p>
              <button className="aboutus">ABOUT US</button>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img
          className="scrollimgone"
          data-speed="2"
          src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/image-paralax-1_1c4bb8f6-2379-477a-844a-c205a34a1108.jpg?v=1727467142&width=600"
          alt="Product 1"
        />
        <img
          className="scrollimgtwo"
          data-speed="1"
          src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/image-paralax-2_683c405d-ec27-405f-86b9-4bc077d1a1a8.jpg?v=1727467153&width=600"
          alt="Product 2"
        />
      </div>
      <div className="spacer"></div>
      <div className="spacer"></div>
    </section>
  );
};

export default ScrollWoman;
