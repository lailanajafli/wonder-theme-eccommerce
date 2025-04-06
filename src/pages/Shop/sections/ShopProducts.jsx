import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL, BASE_URL } from "../../../api/api";
import { Link } from "react-router-dom";
import filterIcon from "../../../assets/images/svg/filterIcon.svg";
import { toggleCartModal } from '../../../redux/slices/cartSlices';
import { useDispatch, useSelector } from "react-redux";
import FilterPanel from "../../../components/FilterPanel";

const ShopProducts = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState(
    sessionStorage.getItem("sortOption") || "featured"
  );
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isFeaturedOpen, setIsFeaturedOpen] = useState(false);
  const isFilterPanel = useSelector((state) => state.cart.isFilterPanel);
  const [priceRange, setPriceRange] = useState({ minPrice: 0, maxPrice: 150 });
  const [selectedBrands, setSelectedBrands] = useState([]);

  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    brands: [],
    minPrice: 0,
    maxPrice: 150,
    availability: [],
  });

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/products`);
        setProducts(response.data);
      } catch (error) {
        console.error("ERROR:", error);
      }
    };
    fetchData();
  }, [category]);

  const handleSortChange = (option) => {
    setSortOption(option);
    sessionStorage.setItem("sortOption", option);
    setIsFeaturedOpen(false);
  };

  const handleFilterChange = (filterData) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...filterData,
    }));
  };

  const getBrandCounts = () => {
    const brandCounts = {};
    products.forEach((product) => {
      if (product.brand) {
        const normalizedBrand = product.brand.toLowerCase();
        brandCounts[normalizedBrand] = (brandCounts[normalizedBrand] || 0) + 1;
      }
    });
  
    const uniqueBrands = {};
    Object.keys(brandCounts).forEach((brand) => {
      const originalBrand = products.find((p) => p.brand?.toLowerCase() === brand)?.brand;
      uniqueBrands[originalBrand] = (uniqueBrands[originalBrand] || 0) + brandCounts[brand];
    });
  
    return uniqueBrands;
  };

  const brandCounts = getBrandCounts();


  const [stockCounts, setStockCounts] = useState({ inStock: 0, outOfStock: 0 });

  useEffect(() => {
    // Filtr
    const filtered = products.filter((product) => {
      const matchesCategory = category ? product.category === category : true;
      const matchesBrand = !filters.brands.length || filters.brands.includes(product.brand);
      const matchesPrice = product.price >= filters.minPrice && product.price <= filters.maxPrice;
      const matchesStock =
      !filters.availability.length ||
      (filters.availability.includes("inStock") && product.stock > 0) ||
      (filters.availability.includes("outOfStock") && product.stock === 0);
    
    
      return matchesCategory && matchesBrand && matchesPrice && matchesStock;
    });
    

    const inStockCount = filtered.filter((product) => product.stock > 0).length;
    const outOfStockCount = filtered.length - inStockCount;
  
  
    switch (sortOption) {
      case "PriceLowToHigh":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "PriceHighToLow":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "Newest":
        filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        break;
      case "Oldest":
        filtered.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        break;
      case "AlphabeticalAZ":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "AlphabeticalZA":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "BestSelling":
        filtered.sort((a, b) => b.sold - a.sold);
        break;
      default:
        break;
    }
  
    setFilteredProducts(filtered);
    setStockCounts({ inStock: inStockCount, outOfStock: outOfStockCount });
  }, [filters, products, sortOption, category]);
  
  

  const handleDropdownSelection = (option) => {
    handleSortChange(option);
  };

  const openFilterPanel = () => {
    dispatch(toggleCartModal());
  };

  const calculateBrandCounts = (products) => {
    return products.reduce((acc, product) => {
      acc[product.brand] = (acc[product.brand] || 0) + 1;
      return acc;
    }, {});
  };
  

  return (
    <div className="shopProductsContainer">
      <div className="countFilterFeaturedCont">
        <p className="productCount">{filteredProducts.length} products</p>

        <div className="filterFeaturedCont">
          <div onClick={() => setIsFilterOpen(true)} className="filterProductsCont">
            <img src={filterIcon} alt="filter Icon" />
            <p className="filterProductsText">Filter</p>
          </div>

          <div className="featuredProductsCont">
            <button
              className="featuredButton"
              onClick={() => setIsFeaturedOpen(!isFeaturedOpen)}
            >
              <span>Sort by: </span> {sortOption.replace(/([A-Z])/g, ' $1')}
            </button>

            {isFeaturedOpen && (
              <ul className="featuredDropdown active">
                <li
                  onClick={() => handleDropdownSelection("Featured")}
                  className={sortOption === "Featured" ? "selected" : ""}
                >
                  Featured
                </li>
                <li
                  onClick={() => handleDropdownSelection("BestSelling")}
                  className={sortOption === "BestSelling" ? "selected" : ""}
                >
                  Best Selling
                </li>
                <li
                  onClick={() => handleDropdownSelection("AlphabeticalAZ")}
                  className={sortOption === "AlphabeticalAZ" ? "selected" : ""}
                >
                  Alphabetically, A-Z
                </li>
                <li
                  onClick={() => handleDropdownSelection("AlphabeticalZA")}
                  className={sortOption === "AlphabeticalZA" ? "selected" : ""}
                >
                  Alphabetically, Z-A
                </li>
                <li
                  onClick={() => handleDropdownSelection("PriceLowToHigh")}
                  className={sortOption === "PriceLowToHigh" ? "selected" : ""}
                >
                  Price, Low to High
                </li>
                <li
                  onClick={() => handleDropdownSelection("PriceHighToLow")}
                  className={sortOption === "PriceHighToLow" ? "selected" : ""}
                >
                  Price, High to Low
                </li>
                <li
                  onClick={() => handleDropdownSelection("Oldest")}
                  className={sortOption === "Oldest" ? "selected" : ""}
                >
                  Date, Old to New
                </li>
                <li
                  onClick={() => handleDropdownSelection("Newest")}
                  className={sortOption === "Newest" ? "selected" : ""}
                >
                  Date, New to Old
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="productCard">
            <div className="sliderProductCont">
              <Link to={`/detail/${product.id}`}>
                <img
                  className="productImage"
                  src={`${BASE_URL}/${product.image}`}
                  alt={product.name}
                />
                <img
                  className="productImage hoverImage"
                  src={`${BASE_URL}/${product.hoverImage}`}
                  alt={product.name}
                />
              </Link>
              <button className="chooseOption">
                <p>ADD TO CART</p>
              </button>
            </div>

            <div className="sliderTextCont">
              <h4 className="brandName">{product.brand}</h4>
              <p className="productName">{product.name}</p>
              <p className="productPrice">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <FilterPanel
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onFilterChange={(filters) => {
          console.log("Gələn filterlər:", filters);
          setFilters(filters); // <-- bu lazımdır
        }}
        
        brandCounts={calculateBrandCounts(filteredProducts)}
        inStockCount={stockCounts.inStock}
        outOfStockCount={stockCounts.outOfStock}
      />
    </div>
  );
};

export default ShopProducts;
