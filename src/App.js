import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";

function App() {
  return (
    <Router>
      {/* component ที่ต้องใช้ทุกหน้า ไว้ที่นี่ */}
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:isbn" element={<BookDetail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
