import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


const ScrollWoman = () => {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 2, 
      effects: true, 
    });

    gsap.fromTo(
      ".imageContainer img",
      {
        opacity: 0,
        y: 100, 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".imageContainer",
          start: "top 80%", 
          end: "bottom 30%",
          scrub: true,
          markers: false, 
        },
      }
    );

    return () => {
      smoother.kill(); 
    };
  }, []);

  return (
    <section className="landingSection">
      <div className="container">
        <div className="row">
          <h1>Where Every Skincare Moment Counts.</h1>
          <p>
            At Beauty, we believe that skincare isn't just a routine; it's a
            journey of self-care and self-discovery. Our curated selection of
            premium skincare products is designed to elevate your beauty
            regimen, offering you a sanctuary of indulgence and transformation.
          </p>
          <button className="aboutus">ABOUT US</button>
        </div>
      </div>

      <div className="imageContainer">
        <img
          data-speed="0.8"
          src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/image-paralax-1_1c4bb8f6-2379-477a-844a-c205a34a1108.jpg?v=1727467142&width=600"
          alt="Product 1"
        />
        <img
          data-speed="1.2"
          src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/image-paralax-2_683c405d-ec27-405f-86b9-4bc077d1a1a8.jpg?v=1727467153&width=600"
          alt="Product 2"
        />
      </div>
    </section>
  );
};

export default ScrollWoman;
