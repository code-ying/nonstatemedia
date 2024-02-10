import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ScrollToTop from "./function/ScrollToTop"
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs"
import Articles from "./pages/Article";
import NonStateCorner from "./pages/NonStateCorner";
function App() {
  return (
    <div className="bg-#EFF5F5">
      <ScrollToTop />
      <Navbar className="fixed " />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/aboutus" Component={AboutUs} />
        <Route path="/article" Component={Articles} />
        <Route path="/nonstatecorner" Component={NonStateCorner} />
      </Routes>
      <Footer className="mt-auto" />
    </div>
  );
}

export default App;
