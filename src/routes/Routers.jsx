import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForProfessionals from "../pages/ForProfessionals";

import { Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/for-professionals" element={<ForProfessionals />} />
    </Routes>
  );
};

export default Routers;
