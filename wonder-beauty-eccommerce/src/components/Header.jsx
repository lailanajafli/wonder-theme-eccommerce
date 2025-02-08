// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

// const Header = () => {
//   const location = useLocation();
//   const isHomePage = location.pathname === "/";

//   const [isScrolled, setIsScrolled] = useState(false);
//   const [videoHeight, setVideoHeight] = useState(0);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     if (!isHomePage) return;

//     const updateVideoHeight = () => {
//       const videoElement = document.querySelector(".heroVideo");
//       if (videoElement) {
//         setVideoHeight(videoElement.offsetHeight);
//       }
//     };

//     updateVideoHeight();
//     window.addEventListener("resize", updateVideoHeight);

//     return () => window.removeEventListener("resize", updateVideoHeight);
//   }, [isHomePage]);

//   useEffect(() => {
//     if (!isHomePage) return;

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > videoHeight - 55);

//       if (window.scrollY > lastScrollY) {
//         if (window.scrollY > videoHeight + 120) 
//           setIsScrolled(false);
        
//       } else {
//         setLastScrollY(true);
//       }
//       setLastScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [videoHeight, lastScrollY, isHomePage]);

//   return (

//     <header className={`headerVideo ${isHomePage ? (isScrolled ? "header heroBeauty" : "headerVideo") : ""}`}>
//       <div
//         className={`barNav ${
//           document.querySelector(".headerVideo") ? "insideHeaderVideo" : ""
//         } ${!setLastScrollY > window.scrollY ? "hidden" : ""}`}
//       >
//         <FontAwesomeIcon className="blackBar" icon={faBars} size="xl" />
//         <nav className="navBar">
//           <Link to="/shop">Shop</Link>
//           <Link to="/bestseller">Bestseller</Link>
//           <Link to="/sale">Sale</Link>
//         </nav>
//       </div>
//       {isHomePage && isScrolled && (
//         <div className="headerBeauty">
//           <img
//             src="https://wonder-theme-beauty.myshopify.com/cdn/shop/files/Path_849.svg?v=1707730068&width=120"
//             alt="Beauty"
//           />
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;






import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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
        // Video geçtiğinde başlık gizlensin ve .header görünsün
        if (currentScrollY > videoHeight - 60) {
          setIsVideoPassed(true);
          setIsScrolled(true);
        } else {
          setIsVideoPassed(false);
          setIsScrolled(false);
        }
      }

      // Yukarı scroll olduğunda .header görünsün, aşağı scroll olduğunda kaybolsun
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
      {/* Anasayfada video başlığı */}
      {isHomePage && (
        <header className={`headerVideo ${isVideoPassed ? "hiddenHeaderVideo" : ""}`}>
          <div className="barNav">
            <FontAwesomeIcon className="blackBar" icon={faBars} size="xl" />
            <nav className="navBar">
              <Link to="/shop">Shop</Link>
              <Link to="/bestseller">Bestseller</Link>
              <Link to="/sale">Sale</Link>
            </nav>
          </div>
        </header>
      )}

      {/* Anasayfa dışındaki sayfalarda sadece .header */}
      <header className={`header ${isScrolled ? "" : "hiddenHeader"}`}>
        <div className="barNav">
          <FontAwesomeIcon className="blackBar" icon={faBars} size="xl" />
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
      </header>
    </>
  );
};

export default Header;