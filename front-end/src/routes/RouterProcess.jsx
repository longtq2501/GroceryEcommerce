import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/AuthenticateService/Login/Login";
import Home from "../pages/Home/Home";
import Test from "../pages/Test/Test";
import ProductPage from "../pages/Product/ProductPage";
import Register from "../pages/AuthenticateService/Register/Register";
import HomeNotLogin from "../pages/Home/HomeNotLogin";
import CheckOut from "../pages/CheckOut/CheckOut";

const RouterProcess = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<HomeNotLogin />} />
        <Route path="/test" element={<Test />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/check-out" element={<CheckOut />} />
      </Routes>
    </Router>
  );
};

export default RouterProcess;
