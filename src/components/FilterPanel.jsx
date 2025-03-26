import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CustomModal from "./CustomModal";
import grayminus from "../assets/images/svg/grayminus.svg";
import grayplus from "../assets/images/svg/grayplus.svg";

const FilterPanel = ({
  isOpen,
  onClose,
  title = "Filter",
  cartPageStyle = {},
}) => {
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(150);



  const minLimit = 0;
  const maxLimit = 150;

  useEffect(() => {
    updateTrackBackground();
  }, [minPrice, maxPrice]);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 1);
    setMaxPrice(value);
  };

  const updateTrackBackground = () => {
    const range = maxLimit - minLimit;
    const minPercent = ((minPrice - minLimit) / range) * 100;
    const maxPercent = ((maxPrice - minLimit) / range) * 100;

    document.documentElement.style.setProperty(
      "--track-bg",
      `linear-gradient(to right, #E7E7E7 ${minPercent}%, black ${minPercent}%, black ${maxPercent}%, #E7E7E7 ${maxPercent}%)`
    );
  };

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category]?.includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...(prev[category] || []), value],
    }));
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const modalStyle = {
    ...cartPageStyle,
    left: "auto",
    right: isOpen ? "0" : "-100%",
    transition: "transform 0.3s ease-in-out",
    width: windowWidth < 900 ? "100%" : "400px",
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      style={modalStyle}
    >
      <div className="filterPanelContainer">
        <ul className="cartList">
          {/* First Dropdown (Brand) */}
          <li className="cartItem">
            <div
              className={`detailDropdown ${
                openDropdownIndex === 0 ? "open" : ""
              }`}
            >
              <div
                className="detailDropdownHeader"
                onClick={() => toggleDropdown(0)}
              >
                <span>Brand</span>
                <img
                  src={openDropdownIndex === 0 ? grayminus : grayplus}
                  alt={openDropdownIndex === 0 ? "minus" : "plus"}
                  className="dropdownIcon"
                />
              </div>
              <div
                className={`detailDropdownContent ${
                  openDropdownIndex === 0 ? "open" : ""
                }`}
              >
                {openDropdownIndex === 0 && (
                  <>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedFilters?.brand?.includes("Brand A")}
                        onChange={() => handleFilterChange("brand", "Brand A")}
                      />
                      Brand A
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedFilters?.brand?.includes("Brand B")}
                        onChange={() => handleFilterChange("brand", "Brand B")}
                      />
                      Brand B
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedFilters?.brand?.includes("Brand C")}
                        onChange={() => handleFilterChange("brand", "Brand C")}
                      />
                      Brand C
                    </label>
                  </>
                )}
              </div>
            </div>

            {/* Price Range */}
            <div
              className={`detailDropdown ${
                openDropdownIndex === 1 ? "open" : ""
              }`}
            >
              <div
                className="detailDropdownHeader"
                onClick={() => toggleDropdown(1)}
              >
                <span>Price Range</span>
                <img
                  src={openDropdownIndex === 1 ? grayminus : grayplus}
                  alt={openDropdownIndex === 1 ? "minus" : "plus"}
                  className="dropdownIcon"
                />
              </div>
              <div
                className={`detailDropdownContent ${
                  openDropdownIndex === 1 ? "open" : ""
                }`}
              >
                {openDropdownIndex === 1 && (
                  <>
                    <div className="price-range">
                      <div className="range-slider">
                        <input
                          type="range"
                          min="0"
                          max="150"
                          value={minPrice}
                          onChange={handleMinChange}
                          className="range-input"
                        />
                        <input
                          type="range"
                          min="0"
                          max="150"
                          value={maxPrice}
                          onChange={handleMaxChange}
                          className="range-input"
                        />
                        <div className="slider-track"></div>
                      </div>
                      <div className="price-inputs">
                        <div className="price-box">
                          <span>USD</span>
                          <input
                            type="number"
                            value={minPrice}
                            onChange={handleMinChange}
                            min={minLimit}
                            max={maxPrice - 1}
                          />
                        </div>
                        <span className="divider">—</span>
                        <div className="price-box">
                          <span>USD</span>
                          <input
                            type="number"
                            value={maxPrice}
                            onChange={handleMaxChange}
                            min={minPrice + 1}
                            max={maxLimit}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </li>
        </ul>

        <div className="cartFooterBottom">
          <Link to="/checkout" onClick={onClose}></Link>
        </div>
      </div>
    </CustomModal>
  );
};

export default FilterPanel;
