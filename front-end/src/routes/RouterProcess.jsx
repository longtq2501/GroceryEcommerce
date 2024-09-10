import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/AuthenticateService/Login/Login";
import Home from "../pages/Home/Home";
import Test from "../pages/Test/Test";
import ProductPage from "../pages/Product/ProductPage";
import Register from "../pages/AuthenticateService/Register/Register";

const RouterProcess = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/product-page" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default RouterProcess;
