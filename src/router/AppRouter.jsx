import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
    <Footer/>
    </>
  );
};

export default AppRouter;
