import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "pages/Home";
import AboutPage from "pages/About";
import BlogPage from "pages/Blog";
import BookingPage from "pages/Booking";

const Main = () => {
  return (
    <main className="main-content">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route path="/book" element={<BookingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default Main;
