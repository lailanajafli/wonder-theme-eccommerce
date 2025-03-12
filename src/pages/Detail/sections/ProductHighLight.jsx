import React from "react";
// import productImage from "./product-image.png";

const ProductHighLight = () => {
  const ingredients = [
    {
      image:
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/citrus-2.jpg?v=1661085992&width=1000",
      title: "Citrus Peel Oil",
      description:
        "Rich in natural compounds called terpenes that have anti-inflammatory, antimicrobial and antioxidant properties.",
    },
    {
      image:
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/argan_595950da-fba0-429e-ad88-27dbc996f7cf.jpg?v=1661086152&width=1000",
      title: "Argan Oil",
      description:
        "Improves skin elasticity and hydration by restoring the barrier function.",
    },
    {
      image:
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/macadamia.jpg?v=1732265690&width=1000",
      title: "Macadamia Oil",
      description:
        "Improves skin elasticity and hydration by restoring the barrier function.",
    },
    {
      image:
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/fig.jpg?v=1661086207&width=1000",
      title: "Opuntia Fig Extract",
      description:
        "Proven to be effective in soothing skin irritations. It also has strong antioxidizing effects on the skin.",
    },
    {
      image:
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/almond.jpg?v=1661086257&width=1000",
      title: "Sweet Almond Oil",
      description:
        "Proven effective in treating inflammatory skin conditions and scars, healing sun damage & reducing the sign of aging.",
    },
    {
      image:
        "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/linalol.jpg?v=1732265830&width=1000",
      title: "Linalool",
      description: "It has a relaxing, calming, and stress-relieving effect.",
    },
  ];

  return (
    <div className="productHighlight">
      <div className="ingredients left">
        {ingredients.slice(0, 3).map((item, index) => (
          <div className="ingredientItemCont" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="ingredientItem">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="productImage">
        <img
          src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/face-care-mokosh-pack.jpg?v=1732355183&width=1920"
          alt="Product"
        />
      </div>
      <div className="ingredients right">
        {ingredients.slice(3).map((item, index) => (
          <div className="ingredientItemCont" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="ingredientItem">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductHighLight;
