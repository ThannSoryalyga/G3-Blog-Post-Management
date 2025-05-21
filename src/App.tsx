import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import Detailblog from "./pages/detail-blog";
import Contact from "./pages/contact";
import Card from "./components/card";
import Home from "./pages/home";
import SponsorPage from "./pages/ SponsorPage"; // ✅ New import
import Register from "./pages/register";
import Login from "./pages/login";

const App = () => {
  return (
    <Router>
      <Header />
      
      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Detailblog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/card" element={<Card />} />
          <Route path="/sponsor" element={<SponsorPage />} />{" "}
          {/* ✅ New route */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    
  );
  
};

export default App;
