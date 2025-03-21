import React, { useState } from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    text: "Body Care",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/body-care_1d5f26b7-6a0b-4c32-a4f4-56f88ce21884.png?v=1727467320&width=200",
    hoverColor: "#E4F1E8",
  },
  {
    text: "Face Care",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/face-care_de9f22b7-fb04-43c8-bdc3-8f249cd200df.png?v=1727467308&width=200",
    hoverColor: "#F4ECE2",
  },
  {
    text: "Bath & Body",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/bath_7e32aec6-5f06-45ed-bf0c-bb44a419c8a1.png?v=1727467295&width=200",
    hoverColor: "#EBF4FA",
  },
  {
    text: "Hand Care",
    image:
      "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/hand-care_5533888a-c49e-4889-9d89-fcafb75df762.png?v=1727467283&width=200",
    hoverColor: "#FAECE6",
  },
];

const ColorfulBack = () => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <section
      className="dynamicSection"
      style={{
        backgroundColor:
          activeSection !== null ? sections[activeSection].hoverColor : "#fff",
      }}
    >
      <p style={{ marginTop: "50px", marginBottom: "20px" }}>
        Popular Collection
      </p>
      <div className="contentContainer">
        {sections.map((section, index) => {
          // URL formatına uyğun olaraq `text` dəyərini çevirmək
          const formattedText = section.text
            .toLowerCase()
            .replace(/ & /g, "-")
            .replace(/\s+/g, "-");

          return (
            <div
              key={index}
              className="contentItem"
              onMouseEnter={() => setActiveSection(index)}
              onMouseLeave={() => setActiveSection(null)}
            >
              <Link className="link" to={`/shop/${formattedText}`}>
                <h2 className="textItem">{section.text}</h2>
              </Link>
              <div className="imageContainer">
                <Link to={`/shop/${formattedText}`}>
                  <img src={section.image} alt={section.text} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ColorfulBack;
