import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import headerBars from "../assets/images/svg/headerBars.svg";
import search from "../assets/images/svg/search.svg";
import login from "../assets/images/svg/login.svg";
import cart from "../assets/images/svg/cart.svg";
import DrawerMenu from "./DrawerMenu";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(!isHomePage);
  const [videoHeight, setVideoHeight] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVideoPassed, setIsVideoPassed] = useState(false);

  useEffect(() => {
    if (!isHomePage) return;

    const updateVideoHeight = () => {
      const videoElement = document.querySelector(".heroVideo");
      if (videoElement) {
        setVideoHeight(videoElement.offsetHeight);
      }
    };

    updateVideoHeight();
    window.addEventListener("resize", updateVideoHeight);

    return () => window.removeEventListener("resize", updateVideoHeight);
  }, [isHomePage]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isHomePage) {
        if (currentScrollY > videoHeight - 60) {
          setIsVideoPassed(true);
          setIsScrolled(true);
        } else {
          setIsVideoPassed(false);
          setIsScrolled(false);
        }
      }

      if (currentScrollY > lastScrollY && currentScrollY > videoHeight + 120) {
        setIsScrolled(false);
      } else if (currentScrollY < lastScrollY && currentScrollY > videoHeight) {
        setIsScrolled(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [videoHeight, lastScrollY, isHomePage]);

  return (
    <>
      {isHomePage && (
        <header className={`headerVideo ${isVideoPassed ? "hiddenHeaderVideo" : ""}`}>
          <div className="barNav">
            <img 
              src={headerBars} 
              alt="header bars" 
              onClick={() => setIsDrawerOpen(true)} 
            />
            <nav className="navBar">
              <Link to="/shop">Shop</Link>
              <Link to="/bestseller">Bestseller</Link>
              <Link to="/sale">Sale</Link>
            </nav>
          </div>
          <div className="navTeaser">
            <img src={search} alt="search icon" />
            <img src={login} alt="login icon" />
            <img src={cart} alt="cart icon" />
          </div>
        </header>
      )}

      <header className={`header ${isScrolled ? "" : "hiddenHeader"}`}>
        <div className="barNav">
          <img 
            src={headerBars} 
            alt="header bars" 
            onClick={() => setIsDrawerOpen(true)} 
          />
          <nav className="navBar">
            <Link to="/shop">Shop</Link>
            <Link to="/bestseller">Bestseller</Link>
            <Link to="/sale">Sale</Link>
          </nav>
        </div>
        <div className="headerBeauty">
          <img
            src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/Path_849.svg?v=1707730068&width=120"
            alt="Beauty"
          />
        </div>
        <div className="navTeaser">
          <img src={search} alt="search icon" />
          <img src={login} alt="login icon" />
          <img src={cart} alt="cart icon" />
        </div>
      </header>

      {/* Drawer Menu */}
      <DrawerMenu isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};

export default Header;