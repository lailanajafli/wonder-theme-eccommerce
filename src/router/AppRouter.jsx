import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckOut from "../pages/CheckOut";

const AppRouter = () => {
  return (
    <>
    <Header/>
    <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/checkout" element={<CheckOut />} />
    </Routes>
    </main>
    <Footer/>
    </>
  );
};

export default AppRouter;
