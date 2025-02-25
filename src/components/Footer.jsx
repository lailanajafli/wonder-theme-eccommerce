import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import visa from "../assets/images/svg/visa.svg";
import mastercard from "../assets/images/svg/mastercard.svg";
import american from "../assets/images/svg/american.svg";
import paypal from "../assets/images/svg/paypal.svg";
import diners from "../assets/images/svg/diners.svg";
import discover from "../assets/images/svg/discover.svg";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import plus from "../assets/images/svg/plus.svg";
import minus from "../assets/images/svg/minus.svg";

const footerLinks = {
  Categories: [
    { name: "Bath & Body", path: "/bath-body" },
    { name: "Body Care", path: "/body-care" },
    { name: "Face Care", path: "/face-care" },
    { name: "Hair Care", path: "/hair-care" },
    { name: "Hand Care", path: "/hand-care" },
    { name: "Essential oils", path: "/essential-oils" },
    { name: "Sale %", path: "/sale" },
  ],
  "Customer Service": [
    { name: "FAQ", path: "/faq" },
    { name: "Shipping", path: "/shipping" },
    { name: "Contact", path: "/contact" },
  ],
  Information: [
    { name: "Return and Refunds", path: "/returns" },
    { name: "Legal Area", path: "/legal" },
    { name: "About us", path: "/about" },
  ],
};

const Footer = () => {
  // Ekran ölçüsünə görə "mobil" olub olmadığını təyin edirik (900px-dən aşağı)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  // Hər bir bölmənin (dropdown) açıq/bağlı vəziyyətini izləyirik
  const [openSections, setOpenSections] = useState({
    Categories: false,
    "Customer Service": false,
    Information: false,
    "About Us": false,
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="footer">
      <div className="footerContainer">
        {Object.entries(footerLinks).map(([section, links]) => (
          <div className="footerColumn" key={section}>
            <div
              onClick={() => isMobile && toggleSection(section)}
              className="footerColumnRes" style={{
                cursor: isMobile ? "pointer" : "default",
              }}
            >
              <span>{section}</span>
              {isMobile &&
                (openSections[section] ? (
                  <img src={minus} alt="minus" className="dropdownIcon" />
                ) : (
                  <img src={plus} alt="plus" className="dropdownIcon" />
                ))}
            </div>
            {(!isMobile || openSections[section]) && (
              <ul>
                {links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <div className="footerColumn aboutUs">
          <div
            onClick={() => isMobile && toggleSection("About Us")}
            style={{
              cursor: isMobile ? "pointer" : "default",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>About Us</span>
            {isMobile &&
              (openSections["About Us"] ? (
                <img src={minus} alt="minus" className="dropdownIcon" />
              ) : (
                <img src={plus} alt="plus" className="dropdownIcon" />
              ))}
          </div>
          {(!isMobile || openSections["About Us"]) && (
            <p>
              We could not have created this demo without the help of an amazing
              source of content and products. Visit our about page to find out
              where all the products used in this demo care from.{" "}
              <Link to="/more-info">More Info</Link>
            </p>
          )}
        </div>
      </div>

      <div className="footerBottom">
        <div className="socialIcons">
          <FaFacebookF />
          <FaXTwitter />
          <FaInstagram />
          <FaPinterestP />
        </div>

        <div className="paymentMethods">
          <img src={visa} alt="Visa" className="paymentIcon" />
          <img src={mastercard} alt="Mastercard" className="paymentIcon" />
          <img src={american} alt="American" className="paymentIcon" />
          <img src={paypal} alt="paypal" className="paymentIcon" />
          <img src={diners} alt="diners" className="paymentIcon" />
          <img src={discover} alt="discover" className="paymentIcon" />
        </div>
      </div>
      <div className="footerBeauty">
        <img
          src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/Path_850.svg?v=1707730148&width=1500"
          alt=""
        />
      </div>
    </footer>
  );
};

export default Footer;
