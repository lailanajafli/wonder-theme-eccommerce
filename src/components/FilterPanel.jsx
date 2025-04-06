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
  onFilterChange,
  brandCounts = {},
  inStockCount,
  outOfStockCount,
}) => {
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(150);

  const toggleAvailability = (status) => {
    setTempFilters((prev) => {
      const updatedAvailability = prev.availability.includes(status)
        ? prev.availability.filter((item) => item !== status)
        : [...prev.availability, status];
  
      console.log("Updated availability:", updatedAvailability); // BURADA LOG YAZ
  
      return {
        ...prev,
        availability: updatedAvailability,
      };
    });
  };
  

  const filteredBrandCounts = brandCounts;


  useEffect(() => {
    setTempFilters({
      brands: selectedBrands,
      minPrice,
      maxPrice,
      availability: selectedAvailability,
    });
  }, [selectedBrands, minPrice, maxPrice, selectedAvailability]);
  

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

  
  const handleBrandChange = (brand) => {
    setTempFilters((prev) => {
      const isSelected = prev.brands.includes(brand);
      const updatedBrands = isSelected
        ? prev.brands.filter((b) => b !== brand)
        : [...prev.brands, brand];
  
      // Markaların doğru şəkildə əlavə olunub-olunmadığını yoxla
      console.log("Updated brands array:", updatedBrands);
  
      return {
        ...prev,
        brands: updatedBrands,
      };
    });
  };
  
  

  const [tempFilters, setTempFilters] = useState({
    brands: [],
    minPrice: minLimit,
    maxPrice: maxLimit,
    availability: [],
  });
  
  const applyFilters = () => {
    console.log("Applying filters:", tempFilters);
    setSelectedBrands(tempFilters.brands);
    setMinPrice(tempFilters.minPrice);
    setMaxPrice(tempFilters.maxPrice);
    setSelectedAvailability(tempFilters.availability);
  
    onFilterChange(tempFilters);
    onClose(); // Paneli kapat
  };
  

  const handleResetFilters = () => {
    const cleared = {
      brands: [],
      minPrice: minLimit,
      maxPrice: maxLimit,
      availability: [],
    };
  
    setSelectedBrands([]);
    setMinPrice(minLimit);
    setMaxPrice(maxLimit);
    setSelectedAvailability([]);
  
    setTempFilters(cleared);
    onFilterChange(cleared);
  };
  
  const removeBrand = (brand) => {
    setSelectedBrands((prev) => prev.filter((b) => b !== brand));
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
          <div
            style={{ display: selectedBrands.length > 0 ? "block" : "none" }}
            className="filterHeaderContainer"
          >
            <div className="filterHeader">
              {selectedBrands.length > 0 && (
                <p className="filterTitle">Filter</p>
              )}
              <div className="selectedBrands">
                {selectedBrands.map((brand) => (
                  <span key={brand} className="selectedBrandTag">
                    {`Brand: ${brand}`}{" "}
                    <button onClick={() => removeBrand(brand)}>✖</button>
                  </span>
                ))}
              </div>
            </div>
          </div>
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
                  alt="toggle"
                  className="dropdownIcon"
                />
              </div>
              <div
                className={`detailDropdownContent ${
                  openDropdownIndex === 0 ? "open" : ""
                }`}
              >
                {openDropdownIndex === 0 &&
                  (brandCounts && Object.keys(brandCounts).length > 0 ? (
                    Object.entries(filteredBrandCounts).map(
                      ([brand, count]) => (
                        <label key={brand}>
                          <input
                            type="checkbox"
                            checked={tempFilters.brands.includes(brand)}
                            onChange={() => handleBrandChange(brand)}
                          />
                          {brand} ({count})
                        </label>
                      )
                    )
                  ) : (
                    <p className="noBrandsMessage">No brands available</p>
                  ))}
              </div>
            </div>

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
                         value={tempFilters.minPrice}
                          onChange={(e) => setMinPrice(Number(e.target.value))}
                          className="range-input"
                        />
                        <input
                          type="range"
                          min="0"
                          max="150"
                          value={tempFilters.maxPrice}
                          onChange={(e) => setMaxPrice(Number(e.target.value))}
                          className="range-input"
                        />
                        <div className="slider-track"></div>
                      </div>
                      <div className="price-inputs">
                        <div className="price-box">
                          <span>USD</span>
                          <input
                            type="number"
                           value={tempFilters.minPrice}
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
                            value={tempFilters.maxPrice}
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
            <div
              className={`detailDropdown ${
                openDropdownIndex === 2 ? "open" : ""
              }`}
            >
              <div
                className="detailDropdownHeader"
                onClick={() => toggleDropdown(2)}
              >
                <span>Availability</span>
                <img
                  src={openDropdownIndex === 2 ? grayminus : grayplus}
                  alt={openDropdownIndex === 2 ? "minus" : "plus"}
                  className="dropdownIcon"
                />
              </div>
              <div
                className={`detailDropdownContent ${
                  openDropdownIndex === 2 ? "open" : ""
                }`}
              >
                {openDropdownIndex === 2 && (
                  <>
                    <div className="filterSection">
                      <label className="filterOption">
                        <input
                          type="checkbox"
                          checked={tempFilters.availability.includes("inStock")}
                          onChange={() => toggleAvailability("inStock")}
                        />
                        In stock {inStockCount}
                      </label>
                      <label className="filterOption">
                        <input
                          type="checkbox"
                          checked={tempFilters.availability.includes("outOfStock")}
                          onChange={() => toggleAvailability("outOfStock")}
                        />
                        Out of stock {outOfStockCount}
                      </label>
                    </div>
                  </>
                )}
              </div>
            </div>
          </li>
        </ul>

        <div className="cartFooterBottom">
          <div className="filterApplyAndReset">
            <button onClick={  applyFilters} className="filterApplyButton">
              Apply
            </button>
            <p onClick={handleResetFilters} className="filterResetButton">
              Remove All
            </p>
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default FilterPanel;         