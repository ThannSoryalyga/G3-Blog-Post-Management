import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import Card from "./components/card";
const App = () => {
  return (
    <Router>
      <Header />
      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="/" element={<h1 className="text-3xl font-bold">Welcome to G3 Blog Post Management</h1>} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;