import { useState, useEffect } from "react";
import Header from "./sections/Hero";
import Hero from "../../components/Header";
import SkinCareBanner from "./sections/SkinCareBanner";
import ThreeCart from "./sections/ThreeCart";
import ScrollWoman from "./sections/ScrollWoman";
import BrandCarousel from "./sections/BrandCarousel";
import DailyRoutine from "./sections/DailyRoutine";
import OurBestSeller from "./sections/OurBestSeller";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="heroSection">
      <Header scrollY={scrollY} />
      <Hero scrollY={scrollY} />
      <SkinCareBanner />
      <ThreeCart />
      <ScrollWoman />
      <BrandCarousel />
      <DailyRoutine />
      <OurBestSeller />
    </div>
  );
}
