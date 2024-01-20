import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { Route, Routes } from "react-router-dom";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import BestTilawat from "./pages/BestTilawat";
import Blogs from "./pages/Blogs";
import Shiekhs from "./pages/Shiekhs";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/shiekhs" element={<Shiekhs />} />
        <Route path="/best-tilawat" element={<BestTilawat />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
