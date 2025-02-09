import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollWoman = () => {
  useEffect(() => {
    // landingSection'ı sabit tutma
    gsap.to(".landingSection", {
      scrollTrigger: {
        trigger: ".landingSection",
        start: "center center", // Sayfanın en üstünde başlar
        end: "+=300%", // landingSection'ın sabit kalacağı süre
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: false, // Debug için
      },
    });

    // Birinci resimin animasyonu
    gsap.fromTo(
      ".scrollimgone",
      {
        y: "100%", // Başlangıçta resim aşağıda
      },
      {
        y: "0%", // Resim yukarıya doğru hareket eder
        duration: 2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".landingSection",
          start: "top center", 
          end: "+=20%", // landingSection'ın sabit kalacağı süre

          scrub: true,
          markers: false, 
        },
      }
    );

    gsap.fromTo(
      ".scrollimgtwo",
      {
        y: "100%", 
      },
      {
        y: "0%", 
        duration: 2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".landingSection",
          start: "top center-=200%", 
          end: "top center+=200%", // landingSection'ın sabit kalacağı süre

          scrub: true,
          markers: false, 
        },
      }
    );
  }, []);

  return (
    <section>
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
          data-speed="0.5"
          src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/image-paralax-1_1c4bb8f6-2379-477a-844a-c205a34a1108.jpg?v=1727467142&width=600"
          alt="Product 1"
        />
        <img
          className="scrollimgtwo"
          data-speed="0.1"
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
