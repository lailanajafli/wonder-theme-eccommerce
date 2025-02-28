import { useState, useEffect } from "react";
import Header from "./sections/Hero";
import Hero from "../../components/Header";
import SkinCareBanner from "./sections/SkinCareBanner";
import ThreeCart from "./sections/ThreeCart";
import ScrollWoman from "./sections/ScrollWoman";
import BrandCarousel from "./sections/BrandCarousel";
import DailyRoutine from "./sections/DailyRoutine";
import OurBestSeller from "./sections/OurBestSeller";
import TwoSlideShow from "./sections/TwoSlideShow";
import VideoSlider from "./sections/VideoSlider";
import PerfectHair from "./sections/PerfectHair";
import ColorfulBack from "./sections/ColorfulBack";
import SkinDetails from './sections/SkinDetails';
import NewBeauty from './sections/NewBeauty';
import CommentSlide from './sections/CommentSlide';
import FeaturesBanner from './sections/FeaturesBanner';
import NewsletterBanner from './sections/NewsletterBanner';

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
    <div className="heroSection" style={{ minHeight: "100vh" , overflowY: "hidden"}}>
      <Header scrollY={scrollY} />
      <Hero scrollY={scrollY} />
      <SkinCareBanner />
      <ThreeCart />
      <ScrollWoman />
      <BrandCarousel />
      <DailyRoutine />
      <OurBestSeller />
      <TwoSlideShow />
      <VideoSlider />
      <PerfectHair />
      <ColorfulBack/>
      <SkinDetails/>
      <NewBeauty/>
      <CommentSlide/>
      <FeaturesBanner/>
      <NewsletterBanner/>
    </div>
  );
}
