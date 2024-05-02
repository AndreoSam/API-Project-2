import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AllUsers from "../Components/AllUsers";
import Header from "../Layout/Header";

const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<AllUsers />} />
      </Routes>
    </Router>
  );
};

export default Routing;
