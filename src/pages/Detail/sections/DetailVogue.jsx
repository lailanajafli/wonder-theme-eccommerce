import React from "react";
import quote from "../../../assets/images/svg/quote.svg";

const DetailVogue = () => {
  return (
    <section className="detailVogue">
        <div className="container">

      <div className="detailVogueContainer">
        <div className="detailVogueImg">
          <img
            src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/vogue-logo-2.png?v=1718114414&width=375"
            alt="vogue"
          />
        </div>
        <p className="detailVogueText">
          "Mokosh Cosmetics produces exceptional natural cosmetics that
          captivate with their quality and selection of raw materials, texture
          and fragrance."
        </p>
        <div className="detailQuote">
        <img  src={quote} alt="" />
        </div>
      </div>
        </div>
    </section>
  );
};

export default DetailVogue;
