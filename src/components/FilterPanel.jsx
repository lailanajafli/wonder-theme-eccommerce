import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CustomModal from "./CustomModal";
import grayminus from "../assets/images/svg/grayminus.svg";
import grayplus from "../assets/images/svg/grayplus.svg";

const FilterPanel = ({ isOpen, onClose, title = "Filter", cartPageStyle = {} }) => {
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [priceRange, setPriceRange] = useState({ min: 40, max: 175 });

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
    isOpen={isOpen} onClose={onClose}
      title={title}
      style={modalStyle}
    >
      <div className="filterPanelContainer">
        <ul className="cartList">
          {/* First Dropdown (Brand) */}
          <li className="cartItem">
            <div className={`detailDropdown ${openDropdownIndex === 0 ? "open" : ""}`}>
              <div className="detailDropdownHeader" onClick={() => toggleDropdown(0)}>
                <span>Brand</span>
                <img
                  src={openDropdownIndex === 0 ? grayminus : grayplus}
                  alt={openDropdownIndex === 0 ? "minus" : "plus"}
                  className="dropdownIcon"
                />
              </div>
              <div className={`detailDropdownContent ${openDropdownIndex === 0 ? "open" : ""}`}>
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

            {/* Second Dropdown (Price Range) */}
            <div className={`detailDropdown ${openDropdownIndex === 1 ? "open" : ""}`}>
              <div className="detailDropdownHeader" onClick={() => toggleDropdown(1)}>
                <span>Price Range</span>
                <img
                  src={openDropdownIndex === 1 ? grayminus : grayplus}
                  alt={openDropdownIndex === 1 ? "minus" : "plus"}
                  className="dropdownIcon"
                />
              </div>
              <div className={`detailDropdownContent ${openDropdownIndex === 1 ? "open" : ""}`}>
                {openDropdownIndex === 1 && (
                  <>
                    <label>
                      <input
                        type="range"
                        min="0"
                        max="200"
                        step="1"
                        value={priceRange.max}
                        onChange={handlePriceChange}
                        name="max"
                        className="priceRangeSlider"
                      />
                      <span>${priceRange.max}</span>
                    </label>
                    <label>
                      Min: $
                      <input
                        type="number"
                        name="min"
                        value={priceRange.min}
                        onChange={handlePriceChange}
                        className="priceInput"
                      />
                    </label>
                    <label>
                      Max: $
                      <input
                        type="number"
                        name="max"
                        value={priceRange.max}
                        onChange={handlePriceChange}
                        className="priceInput"
                      />
                    </label>
                  </>
                )}
              </div>
            </div>

            {/* Third Dropdown (Category) */}
            <div className={`detailDropdown ${openDropdownIndex === 2 ? "open" : ""}`}>
              <div className="detailDropdownHeader" onClick={() => toggleDropdown(2)}>
                <span>Category</span>
                <img
                  src={openDropdownIndex === 2 ? grayminus : grayplus}
                  alt={openDropdownIndex === 2 ? "minus" : "plus"}
                  className="dropdownIcon"
                />
              </div>
              <div className={`detailDropdownContent ${openDropdownIndex === 2 ? "open" : ""}`}>
                {openDropdownIndex === 2 && (
                  <>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedFilters?.category?.includes("Face Care")}
                        onChange={() => handleFilterChange("category", "Face Care")}
                      />
                      Face Care
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedFilters?.category?.includes("Hair Care")}
                        onChange={() => handleFilterChange("category", "Hair Care")}
                      />
                      Hair Care
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedFilters?.category?.includes("Body Care")}
                        onChange={() => handleFilterChange("category", "Body Care")}
                      />
                      Body Care
                    </label>
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
