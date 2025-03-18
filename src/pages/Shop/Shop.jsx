import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import ShopCare from "./sections/ShopCare";

const Shop = () => {
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
      {/* <ShopCare/> */}
    </>
  );
};

export default Shop;
