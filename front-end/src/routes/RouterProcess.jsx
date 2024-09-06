import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/AuthenticateService/Login/Login";

const RouterProcess = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default RouterProcess;
