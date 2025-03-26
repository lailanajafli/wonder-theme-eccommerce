import React from "react";
import { useParams } from "react-router-dom";
import ColorfulBack from "../../Home/sections/ColorfulBack";
import ShopProducts from "./ShopProducts";
import FeaturesBanner from "../../Home/sections/FeaturesBanner";
import NewsletterBanner from "../../Home/sections/NewsletterBanner";

const categoryData = {
  "face-care": {
    title: "Face Care",
    description:
      "Take care of your complexion to make it healthy and radiant. In the range of facial care products you will find creams, scrubs, masks, toners, gels and much more.",
    imageSrc:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/collections/face-care.jpg?v=1660592912&width=2000",
    bgColor: "#F4ECE2",
  },
  "body-care": {
    title: "Body Care",
    description:
      "Take care of your complexion with our extensive collection of skin care products, featuring the best natural ingredients essential for all skin types.",
    imageSrc:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/collections/body-care.jpg?v=1660314193&width=1780",
    bgColor: "#E4F1E8",
  },
  "bath-body": {
    title: "Bath & Body",
    description:
      "Our cosmetics allow you to take care of your skin and cleanse it, as well as provide relaxation and a pleasant sensual experience.",
    imageSrc:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/collections/bath-care.jpg?v=1660659665&width=1500",
    bgColor: "#D2E8F4",
  },
  "hair-care": {
    title: "Hair Care",
    description:
      "In the assortment of our store you will find a wide range of hair care products. Natural hair cosmetics, professional products and the highest quality.",
    imageSrc:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/collections/hair-care.jpg?v=1660661483&width=1500",
    bgColor: "#F3EBDF",
  },
  "hand-care": {
    title: "Hand Care",
    description:
      "Everything for beautiful hands in one place: washing gels, moisturizing creams and masks, and high-quality nail care products.",
    imageSrc:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/collections/hand-care.jpg?v=1660673819&width=1500",
    bgColor: "#F8D1BF",
  },
  "essential-oils": {
    title: "Essential Oils",
    description:
      "Explore pure, natural essential oils, essential oil blends, vegan, chemical-free, synthetic-free.",
    imageSrc:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/collections/oil-category.jpg?v=1660662885&width=1500",
    bgColor: "#F9F1D6",
  },
};

const ShopCare = () => {
  const { category } = useParams();

  const categoryInfo = categoryData[category];

  if (!categoryInfo) {
    return <h2>Category Not Found</h2>;
  }

  return (
    <>
      <section
        className="shopCareSection"
        style={{ backgroundColor: categoryInfo.bgColor }}
      >
        <div className="shopCarecontent">
          <h2>{categoryInfo.title}</h2>
          <p>{categoryInfo.description}</p>
        </div>
        <div className="imageContainer">
          <img src={categoryInfo.imageSrc} alt={categoryInfo.title} />
        </div>
      </section>
      <ShopProducts category={category} />
      <ColorfulBack backgroundColor="#F0F0F0"  sectionTitle="Didn't find the product you're looking for?" />
      <FeaturesBanner/>
      <NewsletterBanner/>
    </>
  );
};

export default ShopCare;
