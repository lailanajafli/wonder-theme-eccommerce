import { useState, useEffect } from "react";
import DetailProduct from "../Detail/sections/DetailProduct";
import Header from "../../components/Header";
import Hero from "../Home/sections/Hero";

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
      
      </>
  );
}
