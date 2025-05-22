import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import Card from "./components/card";
import Home from "./pages/home";
import SponsorPage from "./pages/ SponsorPage"; // ✅ New import
import Register from "./pages/register";
import Login from "./pages/login";

const App = () => {
  return (
     <>
    <Router>
   
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route
            path="/"
            element={
              <h1 className="text-3xl font-bold">
                Welcome to G3 Blog Post Management
              </h1>
            }
          />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/card" element={<Card />} />
          <Route path="/sponsor" element={<SponsorPage />} />{" "}
          {/* ✅ New route */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
     
    </Router>
    </>
  );
};

export default App;
