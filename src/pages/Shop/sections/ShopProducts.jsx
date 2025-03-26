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
  const dispatch = useDispatch();

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
  }, []);

  const handleSortChange = (option) => {
    setSortOption(option);
    sessionStorage.setItem("sortOption", option);
    setIsFeaturedOpen(false);
  };

  let filteredProducts = products.filter(
    (product) => product.category === category
  );
  

  switch (sortOption) {
    case "PriceLowToHigh":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "PriceHighToLow":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case "Newest":
      filteredProducts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      break;
    case "Oldest":
      filteredProducts.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
      break;
    case "AlphabeticalAZ":
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "AlphabeticalZA":
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "BestSelling":
      filteredProducts.sort((a, b) => b.sold - a.sold);
      break;
    default:
      break;
  }

  const handleDropdownSelection = (option) => {
    handleSortChange(option);
  };

    const openFilterPanel = () => {
      dispatch(toggleCartModal());
    };

  return (
    <div className="shopProductsContainer">
      <div className="countFilterFeaturedCont">
        <p className="productCount">Toplam Ürün: {filteredProducts.length}</p>

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
      />
    </div>
    
  );
};

export default ShopProducts;
