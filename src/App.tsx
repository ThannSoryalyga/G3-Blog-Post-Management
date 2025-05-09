import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import Card from "./components/card";
import Home from "./pages/home";
import SponsorPage from "./pages/ SponsorPage"; // ✅ New import

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/card" element={<Card />} />
          <Route path="/sponsor" element={<SponsorPage />} /> {/* ✅ New route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

