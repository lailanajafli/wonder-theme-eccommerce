import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL, BASE_URL } from "../../../api/api";
import { Link } from "react-router-dom";
import filterIcon from "../../../assets/images/svg/filterIcon.svg";

const ShopProducts = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState(
    sessionStorage.getItem("sortOption") || "featured"
  );
  const [isFeaturedOpen, setIsFeaturedOpen] = useState(false);

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
    case "priceLowToHigh":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "priceHighToLow":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case "newest":
      filteredProducts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      break;
    case "oldest":
      filteredProducts.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
      break;
    case "alphabeticalAZ":
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "alphabeticalZA":
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "bestSelling":
      filteredProducts.sort((a, b) => b.sold - a.sold);
      break;
    default:
      break;
  }

  return (
    <div className="shopProductsContainer">
      <div className="countFilterFeaturedCont">
        <p className="productCount">Toplam Ürün: {filteredProducts.length}</p>

        <div className="filterFeaturedCont">
          <div className="filterProductsCont">
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
                <li onClick={() => handleSortChange("Featured")}>Featured</li>
                <li onClick={() => handleSortChange("BestSelling")}>Best Selling</li>
                <li onClick={() => handleSortChange("AlphabeticalAZ")}>Alphabetically, A-Z</li>
                <li onClick={() => handleSortChange("AlphabeticalZA")}>Alphabetically, Z-A</li>
                <li onClick={() => handleSortChange("PriceLowToHigh")}>Price: Low to High</li>
                <li onClick={() => handleSortChange("PriceHighToLow")}>Price: High to Low</li>
                <li onClick={() => handleSortChange("Oldest")}>Date: Old to New</li>
                <li onClick={() => handleSortChange("Newest")}>Date: New to Old</li>
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
    </div>
  );
};

export default ShopProducts;
