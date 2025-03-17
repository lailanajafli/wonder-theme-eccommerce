import { useState, useEffect } from "react";
import DetailProduct from "../Detail/sections/DetailProduct";
import Header from "../../components/Header";
import DetailVideo from "./sections/DetailVideo";
import ProductHighLight from "./sections/ProductHighLight";
import FeaturesBanner from "../Home/sections/FeaturesBanner";
import AfterBeforeSlider from "./sections/AfterBeforeSlider";
import DetailVogue from "./sections/DetailVogue";
import DetailAboutMokosh from "./sections/DetailAboutMokosh";
import NewsletterBanner from "../Home/sections/NewsletterBanner";
import VideoSlider from "../Home/sections/VideoSlider";

// import DetailWomenSlider from "./sections/DetailWomenSlider";

export default function Detail() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header scrollY={scrollY} />
      <DetailProduct />
      <DetailVideo/>
      <ProductHighLight/>
      <VideoSlider title= "Your Daily Routine" useStaticData={true} showRoutineCard={false} style={{marginBottom: "0px", backgroundColor: "#ECF9F8", padding: "50px 0px 40px 0px"}}/>
      {/* <DetailWomenSlider/> */}
      <FeaturesBanner/>
      <AfterBeforeSlider/>
      <DetailVogue/>
      <DetailAboutMokosh/>
      <VideoSlider title= "Recommended by Our Customers"  style={{marginBottom: "0px", padding: "30px 0px 40px 0px"}}/>
      <NewsletterBanner/>
      </>
  );
}
