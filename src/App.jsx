import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import SellScrap from "./pages/SellScrap";
import JoinCommunity from "./pages/JoinCommunity";
// import Profile from "./pages/Profile";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sell-scrap" element={<SellScrap />} />
          <Route path="/join-com" element={<JoinCommunity />} />
          {/* <Route path="/" element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
