import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import headerBars from "../assets/images/svg/headerBars.svg";
import search from "../assets/images/svg/search.svg";
import login from "../assets/images/svg/login.svg";
import cart from "../assets/images/svg/cart.svg";
import DrawerMenu from "./DrawerMenu";
import CartPage from "../components/CartPage";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { toggleCartModal } from '../redux/slices/cartSlices';
import SearchComponent from "./SearchComponent";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isCheckoutPage = location.pathname === "/checkout";
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(!isHomePage);
  const [videoHeight, setVideoHeight] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isVideoPassed, setIsVideoPassed] = useState(false);
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.cartCount);

const isCartModalOpen = useSelector((state) => state.cart.isCartModalOpen);


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
    if (isHomePage) {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setIsScrolled(false);
        setIsVideoPassed(false);
      }
    }
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
  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
    }
  }, [isHomePage]);
  
  if (isCheckoutPage) {
    return null; 
  }

  const openCartModal = () => {
    dispatch(toggleCartModal());
  };

  return (
    <>
      {isHomePage && (
        <header
          className={`headerVideo ${isVideoPassed ? "hiddenHeaderVideo" : ""}`}
        >
          <div className="barNav">
            <img
              src={headerBars}
              alt="header bars"
              onClick={() => setIsDrawerOpen(true)}
            />
            <nav className="navBar">
            <a onClick={() => setIsDrawerOpen(true)}>Shop</a>
            <a onClick={() => setIsDrawerOpen(true)}>Bestseller</a>
            <a>Sale</a>
            </nav>
          </div>
          <div className="navTeaser">
            <img   onClick={() => setIsSearchOpen(true)} src={search} alt="search icon" />
            {isSearchOpen && <SearchComponent onClose={() => setIsSearchOpen(false)} />}
            <div className="cartIcon" onClick={openCartModal}>
              <img src={cart} alt="cart icon" />
              {cartCount > 0 && <span className="cartCount">{cartCount}</span>}
            </div>
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
            <a onClick={() => setIsDrawerOpen(true)}>Shop</a>
            <a onClick={() => setIsDrawerOpen(true)}>Bestseller</a>
            <a >Sale</a>
          </nav>
        </div>
        <Link to="/">
        <div className="headerBeauty">
          <img
            src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/Path_849.svg?v=1707730068&width=120"
            alt="Beauty"
          />
        </div>
        </Link>
        <div className="navTeaser">
        <img   onClick={() => setIsSearchOpen(true)} src={search} alt="search icon" />
        {isSearchOpen && <SearchComponent onClose={() => setIsSearchOpen(false)} />}
          <div className="cartIcon"  onClick={openCartModal}>
            <img src={cart} alt="cart icon" />
            {cartCount > 0 && <span className="cartCount">{cartCount}</span>}

          </div>
        </div>
      </header>

      <DrawerMenu
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
      <CartPage
        isOpen={isCartModalOpen} onClose={() => dispatch(toggleCartModal())} 
      />
    </>
  );
};

export default Header;