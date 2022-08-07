import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../App";
import Weddle from "../scenes/weddle";

function router(req, res, next) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weddle" element={<Weddle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default router;
