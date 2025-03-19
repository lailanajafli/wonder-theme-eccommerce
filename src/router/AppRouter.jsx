import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckOut from "../pages/CheckOut";
import Detail from "../pages/Detail/Detail";
import DetailProduct from "../pages/Detail/sections/DetailProduct";
import ShopCare from "../pages/Shop/sections/ShopCare";
import { ToastContainer } from "react-toastify";

const AppRouter = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:category" element={<ShopCare />}/>
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default AppRouter;
