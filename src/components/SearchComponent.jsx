import { motion, AnimatePresence } from "framer-motion";
import close from "../assets/images/svg/close.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL, BASE_URL } from "../api/constants/base_url";
import { div } from "framer-motion/client";
import { Link } from "react-router-dom";

export default function SearchComponent({ onClose, showSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/products?search=${searchTerm}`
        );
        setSuggestions(response.data);
        setFilteredSuggestions(
          response.data.filter(
            (product) =>
              (product.name &&
                product.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())) ||
              (product.brand &&
                product.brand.toLowerCase().includes(searchTerm.toLowerCase()))
          )
        );
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchSuggestions();
    }, 1);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  useEffect(() => {
    setFilteredSuggestions(
      suggestions.filter(
        (product) =>
          (product.name &&
            product.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (product.brand &&
            product.brand.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    );
  }, [searchTerm, suggestions]);

  const highlightedText = (text) => {
    if (!searchTerm || !text) return text;
    const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} style={{ fontWeight: "bold" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const displayedProducts = showAll
    ? filteredSuggestions
    : filteredSuggestions.slice(0, 6);

  const handleSearchTermChange = (e) => {
    const newTerm = e.target.value;
    setSearchTerm(newTerm); 
  };

  const handleCloseSearch = () => {
    onClose();
    setSearchTerm(""); 
  };

  return (
    <AnimatePresence>
      <motion.div
        className="searchOverlay"
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="searchContent">
          <div className="searchInputAndClose">
            <input
              type="text"
              className="searchInput"
              placeholder="Find a product..."
              value={searchTerm}
              onChange={handleSearchTermChange}
              autoFocus
            />
            <div className="searchCloseButton" onClick={handleCloseSearch}>
              <img src={close} alt="search close image" />
            </div>
          </div>
          {searchTerm.trim() === "" ? (
            <></>
          ) : filteredSuggestions.length > 0 ? (
            <>
              <ul className="searchSuggestionsList">
                <ul className="suggestionsList">
                  {displayedProducts.map((product) => (
                    <Link to={`/detail/${product.id}`} key={product.id}>
                    <li key={product.id} className="suggestionItem">
                      <div className="searchProductImage">
                        <img
                          src={`${BASE_URL}/${product.image}`}
                          alt={product.name}
                        />
                      </div>
                      <div className="searchProductInfo">
                        <span className="searchProductName">
                          {highlightedText(product.name)}
                        </span>
                        <span className="searchProductBrand">
                          {highlightedText(product.brand)}
                        </span>
                        <span className="searchProductPrice">
                          ${product.price}
                        </span>
                      </div>
                    </li>
                    </Link>
                  ))}
                </ul>
              </ul>
              {filteredSuggestions.length > 0 && !showAll && (
                <Link to="/shop/face-care">
                <div className="viewAllButtonContainer">
                  <button
                    className="viewAllButton"
                    onClick={() => setShowAll(true)}
                  >
                    View All
                  </button>
                </div>
                </Link>
              )}
            </>
          ) : (
            <div className="noResultsMessage">
              <p>
                No results found for "{searchTerm}". Check the spelling or use a
                different word or phrase.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
