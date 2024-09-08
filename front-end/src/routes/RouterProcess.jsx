import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/AuthenticateService/Login/Login";
import Home from "../pages/Home/Home";
import Test from "../pages/Test/Test";

const RouterProcess = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home  />}/>
        <Route path="/test" element={<Test  />}/>
      </Routes>
    </Router>
  );
};

export default RouterProcess;
